import { create } from "zustand";
import { api } from "../lib/axios";

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

  play: (currentModuleIndex: number, currentLessonIndex: number) => void;
  next: () => void;

  loadCourse: () => Promise<void>;
};

export const useStore = create<PlayerStateType>((set, get) => ({
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  courseIsLoading: true,

  play: (currentModuleIndex: number, currentLessonIndex: number) => {
    set({ currentModuleIndex, currentLessonIndex });
  },

  next: () => {
    const { currentModuleIndex, currentLessonIndex, course } = get();

    if (!course) return;

    if (
      course &&
      currentLessonIndex < course.modules[currentModuleIndex].lessons.length - 1
    ) {
      set({ currentLessonIndex: currentLessonIndex + 1 });
    } else {
      // Verifica se existe outro módulo disponível
      const nextModuleIndex = currentModuleIndex + 1;
      const nextModule = course.modules[nextModuleIndex];

      if (nextModule) {
        set({ currentModuleIndex: nextModuleIndex, currentLessonIndex: 0 });
      }
    }
  },

  async loadCourse() {
    set({ courseIsLoading: true });

    await new Promise((resolve) => setTimeout(resolve, 1000)); //simulate loading
    api.get("/course").then((response) => {
      set({ course: response.data as CourseData, courseIsLoading: false });
    });
  },
}));
