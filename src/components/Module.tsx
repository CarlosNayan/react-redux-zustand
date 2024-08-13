import { ChevronDown } from "lucide-react";
import { Lessions } from "./Lessions";

type ModuleProps = {
  title: string;
  ammountOfLessions: number;
  moduleIndex: number;
};

export function Module({ title, ammountOfLessions, moduleIndex }: ModuleProps) {
  return (
    <div>
      <button className="flex w-full flex-col gap-3 bg-zinc-800 p-4">
        <div className="flex flex-row gap-4 w-full">
          <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs text-white">
            {++moduleIndex}
          </div>
          <div className="flex flex-col gap-1 text-left">
            <strong className="text-sm text-white">{title}</strong>
            <span className="text-sx text-zinc-400">{ammountOfLessions + " aulas"}</span>
          </div>
          <ChevronDown className="w-4 h-4 ml-auto text-zinc-400" />
        </div>
      </button>
      <nav className="relative w-full flex flex-col gap-4 p-6">
        <Lessions title="Desvendando o Redux" duration="12:00" />
        <Lessions title="Desvendando o Redux" duration="12:00" />
        <Lessions title="Desvendando o Redux" duration="12:00" />
      </nav>
    </div>
  );
}
