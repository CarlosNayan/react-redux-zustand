import ReactPlayer from "react-player";
import { useAppDispatch } from "../store";
import { next, useCurrentLession } from "../store/slices/player";

export function VideoPlayer() {
  const dispatch = useAppDispatch();
  const { lessions, currentLesson } = useCurrentLession();

  function handleNext() {
    dispatch(next());
  }

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          controls
          onEnded={handleNext}
          url={"https://www.youtube.com/watch?v=" + lessions[currentLesson].id}
        />
      </div>
    </div>
  );
}
