import { describe, expect, it } from "vitest";
import { next, play, player as reducer } from "./player";

describe("player slice", () => {
  const initialState = {
    course: {
      id: 1,
      modules: [
        {
          id: 1,
          title: "Iniciando com React",
          lessons: [
            { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
            { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
          ],
        },
        {
          id: 2,
          title: "Estrutura da aplicação",
          lessons: [
            { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
            { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    courseIsLoading: true,
  };

  it("should be able to play a lesson", () => {
    const state = reducer(
      initialState,
      play({ currentModuleIndex: 1, currentLessonIndex: 2 })
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(2);
  });

  it("should be able to play next lesson", () => {
    const state = reducer(initialState, next());

    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automatically", () => {
    const state = reducer(
      { ...initialState, currentModuleIndex: 0, currentLessonIndex: 1 },
      next()
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(0);
  });

  it("should not be able update the current module if it doesn't exist next lession available", () => {
    const state = reducer(
      { ...initialState, currentModuleIndex: 1, currentLessonIndex: 1 },
      next()
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(1);
  });
});
