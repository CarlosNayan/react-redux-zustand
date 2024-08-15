import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Lessions } from "./Lessions";
import { useStore } from "../store";
import { useEffect } from "react";
type ModuleProps = {
  title: string;
  ammountOfLessions: number;
  moduleIndex: number;
};

export function Module({ title, ammountOfLessions, moduleIndex }: ModuleProps) {
  const { course, currentModuleIndex, currentLessonIndex, play } = useStore();

  const currentLession =
    course?.modules[currentModuleIndex].lessons[currentLessonIndex];

  const currentModule = course?.modules[currentModuleIndex];

  useEffect(() => {
    if (!course) return;
    document.title = `Assistindo: ${currentLession?.title}`;
  }, [course, currentModuleIndex, currentLessonIndex]);

  return (
    <Collapsible.Root
      className="group"
      defaultOpen={currentModuleIndex === moduleIndex}
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
          {currentModule?.lessons.map((lession, index) => (
            <Lessions
              key={lession.id}
              title={lession.title}
              duration={lession.duration}
              isCurrent={
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === index
              }
              onPlay={() => play(currentModuleIndex, index)}
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
