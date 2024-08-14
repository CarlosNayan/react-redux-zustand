import { PlayCircle, Video } from "lucide-react";

type LessionProps = {
  title: string;
  duration: string;
  isCurrent: boolean;
  onPlay: () => void;
};

export function Lessions({
  title,
  duration,
  isCurrent = false,
  onPlay,
}: LessionProps) {
  return (
    <button
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 enabled:hover:text-zinc-100 data-[active=true]:text-emerald-400"
      onClick={onPlay}
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-sx text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
