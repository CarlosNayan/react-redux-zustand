import ReactPlayer from "react-player";
import { Loader } from "lucide-react";
import { useStore } from "../store";

export function VideoPlayer() {
  const {
    course,
    currentModuleIndex,
    currentLessonIndex,
    courseIsLoading,
    next,
  } = useStore();

  const currentLession =
    course?.modules[currentModuleIndex].lessons[currentLessonIndex];

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        {courseIsLoading ? (
          <div className="w-full h-full items-center justify-center flex">
            <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
          </div>
        ) : (
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls
            onEnded={next}
            url={
              currentLession &&
              "https://www.youtube.com/watch?v=" + currentLession.id
            }
          />
        )}
      </div>
    </div>
  );
}
