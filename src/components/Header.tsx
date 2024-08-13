import { MessageCircle } from "lucide-react";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-50">
          Fundamentos do redux
        </h1>
        <p className="text-sm text-zinc-400">Módulo 01</p>
      </div>
      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium hover:bg-violet-600">
        <MessageCircle className="w-4 h-4 text-white" />
        <p className="text-white">Deixa feedback</p>
      </button>
    </div>
  );
}
