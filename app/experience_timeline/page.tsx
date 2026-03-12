'use client'

import { Timeline } from "@/components/ui/timeline";
import { GridItem } from "../components/grid_item";
import { GraduationCap, Github, Workflow } from "lucide-react";
import { GridItem2 } from "../components/grid_item_2";
import { IconBrandNextjs } from "@tabler/icons-react";
import Image from "next/image";
import PDFModal from "../components/PDFModal";
import React, { useState } from "react";


export default function Experience_Timeline() {
    const [open, setOpen] = useState(false);

  const data = [
      {
      title: "Nov 2017 - Present",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Quantitative Research & Development
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li>
              Development of asset-specific predictive pricing models combining historical price data with supply metrics and structural indicators to
              generate systematic alpha signals
            </li>
            <li>
              Translation of projection models into executable rule-based trading system logic
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Jan 2027",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Johns Hopkins University — MS in Artificial Intelligence
          </p>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-sm sm:text-sm md:text-xl lg:text-2xl font-semibold leading-10 tracking-tight">
            Expected Start — January 2027
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li>
              Admitted to the online M.S. in Artificial Intelligence; full enrollment pending completion of prerequisite coursework
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Dec 2025",
      content: (
      <div>
        <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
          text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
          Worcester Polytechnic Institute — BS in Robotics Engineering
        </p>
          <div className="space-y-9">
          {/* View Diploma */}
            <div className="w-full max-w-md mx-auto mt-4 sm:mt-4 md:mt-8 lg:mt-12 mb-2 sm:mb-2 md:mb-4 lg:mb-4">
              <GridItem
                area="auto"
                icon={
                  <GraduationCap className="h-6 w-6 text-neutral-400" />
                }
                title={
                  <button
                    onClick={() => setOpen(true)}
                    className="text-blue-400 hover:underline text-center"
                  >
                    View Diploma (PDF)
                  </button>
                }
                description={null}
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2022-2023",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Field Service Engineer — Software & Systems
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li> 
              Company: Milara Inc.
            </li>
            <li>
              Location: Milford, MA
            </li>
          </ul>
      </div>
      ),
    },

    {
      title: "2018-2022",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Founder — Product Design, CNC Manufacturing, & E-Commerce
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li> 
              Company: AlphaOmega LLC
            </li>
            <li>
              Location: Plymouth, MA
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "1998-2018",
      content: (
        <div>
          <p className="mb-2 sm:mb-6 text-slate-400 sm:break-normal max-w-full
            text-lg sm:text-lg md:text-3xl lg:text-4xl font-semibold leading-10 tracking-tight">
            Logistics Manager / CNC Machinist
          </p>
          <ul 
            className="list-disc pl-5 space-y-1 mb-2 text-slate-500 lg:text-xl md:text-base lg:max-w-4xl sm:break-normal max-w-full leading-10 tracking-tight">
            <li> 
              Company: MetalProUSA Inc.
            </li>
            <li>
              Location: Plymouth, MA
            </li>
          </ul>
        </div>
      ),
    },



  ];
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl mb-12 text-slate-400 font-semibold">
          Experience Timeline
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed mb-12">
          <p>
            Key professional, academic, and technical milestones
          </p>
        </div>
  
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      <div className="h-60 sm:h-56 md:h-94 xl:h-[26rem]" />

          <PDFModal
            isOpen={open}
            onClose={() => setOpen(false)}
            pdfUrl="/WPI_Diploma.pdf"
            title="Official Digital WPI Robotics Engineering Diploma"
          />
    </div>
    </div>
  );
}