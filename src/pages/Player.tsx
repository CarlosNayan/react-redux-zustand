import { MessageCircle } from "lucide-react";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 flex justify-center">
      <div className="flex w-[1100px] flex-col gap-6">
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
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1 text-white">video</div>
          <aside className="w-80 border-l border-zinc-800 bg-zinc-900 h-[600px]"></aside>
        </main>
      </div>
    </div>
  );
}
