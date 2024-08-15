import { useEffect } from "react";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { VideoPlayer } from "../components/VideoPlayer";
import { useStore } from "../store";

export function Player() {
  const { course, loadCourse } = useStore();

  useEffect(() => {
    loadCourse();
  }, [loadCourse]);

  return (
    <div className="h-screen bg-zinc-950 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <Header />
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <VideoPlayer />

          <aside
            className={`w-80 border-l border-zinc-800 bg-zinc-900 absolute top-0 bottom-0 right-0 overflow-y-scroll 
              scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-900 divide-y-2 divide-zinc-900 `}
          >
            {course?.modules?.map((module, index) => (
              <Module
                key={module.id}
                title={module.title}
                ammountOfLessions={module.lessons.length}
                moduleIndex={index}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
