import { MessageCircle } from "lucide-react";
import { useAppSelector } from "../store";

export function Header() {
  const lessionVideo = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });
  const isCourseLoadingState = useAppSelector(
    (state) => state.player.courseIsLoading
  );

  if (isCourseLoadingState) return <div className="w-6 h-16" />;
  return (
    <div className="flex items-center justify-between">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-50">
          {lessionVideo.currentLesson?.title}
        </h1>
        <p className="text-sm text-zinc-400">
          {lessionVideo.currentModule?.title}
        </p>
      </div>
      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium hover:bg-violet-600">
        <MessageCircle className="w-4 h-4 text-white" />
        <p className="text-white">Deixa feedback</p>
      </button>
    </div>
  );
}
