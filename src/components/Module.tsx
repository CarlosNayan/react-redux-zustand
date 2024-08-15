import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Lessions } from "./Lessions";
import { useAppDispatch } from "../store";
import { play, useCurrentLession } from "../store/slices/player";
import { useEffect } from "react";
type ModuleProps = {
  title: string;
  ammountOfLessions: number;
  moduleIndex: number;
};

export function Module({ title, ammountOfLessions, moduleIndex }: ModuleProps) {
  const dispatch = useAppDispatch();

  const { lessions, currentModule, currentLesson } = useCurrentLession();

  useEffect(() => {
    if (!lessions) return;
    document.title = `Assistindo: ${lessions[currentLesson].title}`;
  }, [lessions, currentModule, currentLesson]);

  return (
    <Collapsible.Root
      className="group"
      defaultOpen={currentModule === moduleIndex}
    >
      <Collapsible.Trigger>
        <button className="flex-1 w-[308px] flex-col gap-3 bg-zinc-800 p-4">
          <div className="flex flex-row gap-4 w-full">
            <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs text-white">
              {moduleIndex + 1}
            </div>
            <div className="flex flex-col gap-1 text-left">
              <strong className="text-sm text-white">{title}</strong>
              <span className="text-sx text-zinc-400">
                {ammountOfLessions + " aulas"}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
          </div>
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative w-full flex flex-col gap-4 p-6">
          {lessions?.map((lession, index) => (
            <Lessions
              key={lession.id}
              title={lession.title}
              duration={lession.duration}
              isCurrent={
                currentModule === moduleIndex && currentLesson === index
              }
              onPlay={() =>
                dispatch(
                  play({
                    currentModuleIndex: moduleIndex,
                    currentLessonIndex: index,
                  })
                )
              }
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
