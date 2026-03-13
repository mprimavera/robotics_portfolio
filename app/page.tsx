"use client";
import { GridItem } from "./components/grid_item";
import { Workflow } from "lucide-react";

import { ReactNode } from "react";

// Helper component for sections
function ProjectSection({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className=" border rounded-4xl bg-black/60 backdrop-blur-sm p-1">
      <h1 className="max-w-full text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-10 tracking-tight text-slate-400
        pb-6 sm:pb-6 md:pb-6 lg:pb-8 pt-4">
        Michael Primavera
      </h1>
      <h3 className="text-center text-slate-400 sm:break-normal max-w-full text-xl sm:text-2xl md:text-2xl
        pb-2 sm:pb-2 md:pb-2 lg:pb-2 font-semibold leading-10 tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-x-16">
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative w-full h-screen">

      {/* Fixed background image */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0
          bg-[url('/arm_chip.jpeg')]
          bg-cover
          bg-center
          bg-no-repeat" />
        <div className="absolute inset-0 bg-black/30"/>
        </div>

      {/* Main content */}
      <div className="relative flex items-center justify-center font-sans w-full h-full
        bg-transparent">
        <main className="
          relative z-10
          flex flex-col items-center justify-center
          px-4 sm:px-16
          w-full max-w-3xl
          ">
          <div className=" text-slate-400/50 mb-14 pt-4 min-w-[410px] text-center">
          <ProjectSection
            title={
              <>
              Robotics Engineer
              </>
            }
          >
            <div className="w-full max-w-7xl mx-auto px-4">
              <p className="text-base sm:text-lg text-slate-400 pt-4 mb-6">
                Robotics engineer focused on software, embedded systems, and real-world automation
                built on physical hardware. Background in robotic systems integration and
                CNC manufacturing.
              </p>
            </div>
            <div className="w-full max-w-md mx-auto mb-4">
            <GridItem
              icon={<Workflow className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="/robotics_projects"
                  className="text-center break-normal"
                >
                  Robotics Projects
                </a>
              }
              description={null}
            />
          </div>
          </ProjectSection>
          </div>
        </main>
      </div>
    </div>
  );
}
