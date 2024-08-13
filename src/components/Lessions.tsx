import { Video } from "lucide-react";

type LessionProps = {
  title: string;
  duration: string;
};

export function Lessions({ title, duration }: LessionProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-sx text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
