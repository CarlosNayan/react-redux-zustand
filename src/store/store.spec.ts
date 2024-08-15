import { beforeEach, describe, expect, it } from "vitest";
import { useStore } from "./index";

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
describe("player slice", () => {
  beforeEach(() => {
    useStore.setState(initialState);
  });

  it("should be able to play a lesson", () => {
    const { play } = useStore.getState();

    play(1, 2);

    const { currentModuleIndex, currentLessonIndex } = useStore.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(2);
  });

  it("should be able to play next lesson", () => {
    const { next } = useStore.getState();

    next();

    const { currentModuleIndex, currentLessonIndex } = useStore.getState();

    expect(currentModuleIndex).toEqual(0);
    expect(currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automatically", () => {
    useStore.setState({
      ...initialState,
      currentModuleIndex: 0,
      currentLessonIndex: 1,
    });
    const { next } = useStore.getState();

    next();

    const { currentModuleIndex, currentLessonIndex } = useStore.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(0);
  });

  it("should not be able update the current module if it doesn't exist next lession available", () => {
    useStore.setState({
      ...initialState,
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    });
    const { next } = useStore.getState();

    next();

    const { currentModuleIndex, currentLessonIndex } = useStore.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(1);
  });
});
