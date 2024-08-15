import ReactPlayer from "react-player";
import { useAppDispatch, useAppSelector } from "../store";
import { next, useCurrentLession } from "../store/slices/player";
import { Loader } from "lucide-react";

export function VideoPlayer() {
  const dispatch = useAppDispatch();
  const { lessions, currentLesson } = useCurrentLession();
  const isCourseLoadingState = useAppSelector(
    (state) => state.player.courseIsLoading
  );

  function handleNext() {
    dispatch(next());
  }

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        {isCourseLoadingState ? (
          <div className="w-full h-full items-center justify-center flex">
            <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
          </div>
        ) : (
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls
            onEnded={handleNext}
            url={
              lessions &&
              "https://www.youtube.com/watch?v=" + lessions[currentLesson].id
            }
          />
        )}
      </div>
    </div>
  );
}
