import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "../../lib/axios";

type CourseData = {
  id: number;
  modules: {
    id: number;
    title: string;
    lessons: {
      id: string;
      title: string;
      duration: string;
    }[];
  }[];
};

type PlayerStateType = {
  course: CourseData | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  courseIsLoading: boolean;
};

const initialState: PlayerStateType = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  courseIsLoading: true,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action) => {
      state.currentModuleIndex = action.payload.currentModuleIndex;
      state.currentLessonIndex = action.payload.currentLessonIndex;
    },
    next: (state) => {
      // Verifica se o módulo atual ainda tem aulas
      if (
        state.course &&
        state.currentLessonIndex <
          state.course.modules[state.currentModuleIndex].lessons.length - 1
      ) {
        state.currentLessonIndex += 1;
      } else {
        // Verifica se existe outro módulo disponível
        const nextModuleIndex = state.currentModuleIndex + 1;
        const nextModule = state.course?.modules[nextModuleIndex];

        if (nextModule) {
          state.currentModuleIndex += 1;
          state.currentLessonIndex = 0;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCourse.pending, (state) => {
      state.courseIsLoading = true;
    });
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course = action.payload;
      state.courseIsLoading = false;
    });
  },
});

export const loadCourse = createAsyncThunk("player/loadCourse", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //simulate loading
  return api.get("/course").then((response) => {
    return response.data as CourseData;
  });
});

export const player = playerSlice.reducer;

export const { play, next } = playerSlice.actions;

export const useCurrentLession = () => {
  return useAppSelector((state) => {
    const currentModule = state.player.currentModuleIndex;
    const currentLesson = state.player.currentLessonIndex;
    const lessions = state.player.course?.modules[currentModule].lessons;

    return { lessions, currentModule, currentLesson };
  });
};
