"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

// Helper component for sections
function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <h3 className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-20">
        {children}
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          Robotics Projects
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed mb-12">
          <p>
            These projects represent selected examples of my technical work and analytical approach. This is not an exhaustive
            representation, and some professional experience—such as my work on Milara’s software team—cannot be displayed due
            to confidentiality restrictions.
          </p>
        </div>

        {/* ===== Robotics ===== */}
        <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px]">
          <ProjectSection title="Robotics">
            {/* Industrial Robotics */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/YAJ9Wzltu34?si=KOFma-CiZnBBG-z9"
                    title="Industrial Robotics"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  Automation line featuring a Fanuc M-1iA and UR5e, integrated with conveyors and sensors.
                </p>
                <p className="text-sm text-slate-500">
                  My primary responsibility was programming the central UR5e after selecting it to control the system via the PLC. I also handled the video editing.
                </p>
              </BackgroundGradient>
            </div>
            {/* RBE3001 Vision */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/EnIhbuE6zA0?si=p2Yk1_7nzTG5uk_B"
                    title="Robot Vision"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  Using MATLAB and vision sensors to locate, grasp, and sort balls by color.
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    As part of a three-person team, we programmed the robot using the MATLAB Computer Vision Toolbox and
                    libraries to control the servo motors. All trajectory planning was written from scratch using both forward
                    and inverse kinematics.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          </ProjectSection>
        </div>

        {/* ===== Embedded Systems ===== */}
          <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px]">
            <ProjectSection title="Embedded Systems">
              {/* Embedded systems PD control*/}
              <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                  <div className="w-full aspect-video mb-4">
                    <iframe
                      loading="lazy"
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/JtrBYZ2HA0A?si=AOZyXL8qBJvhRXvJ"
                      title="Embedded Programming"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                    Embedded programming of proportional-derivative (PD) control in C
                  </p>
                  <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                    <p className="text-sm text-slate-500">
                      Using Linux and the Pico SDK, all code was written from scratch, including the display code and encoder-based
                      proportional-derivative control. Integral control was implemented in other projects.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
              {/* Adjustable Duty Cycle */}
              {/* <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                  <div className="w-full aspect-video mb-4">
                    <iframe
                      loading="lazy"
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/4sNkf1GcZYo?si=Q8oHnvzp2FLXDE7U"
                      title="Adjustable Duty Cycle"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                    Embedded programming in C: adjustable duty cycle
                  </p>
                  <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                    <p className="text-sm text-slate-500">
                      I used a potentiometer with an ADC module to adjust the duty cycle output of a PWM pin on a Raspberry Pi
                      Pico 2 W microcontroller. The code was written in C using a Linux environment. An oscilloscope was used
                      to verify correct operation within ±2.5%.
                    </p>
                  </div>
                </BackgroundGradient>
              </div> */}
              {/* ADC Voltmeter */}
              <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                  <div className="w-full aspect-video mb-4">
                    <iframe
                      loading="lazy"
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/NoOMwVs4Xgc?si=h2jmUgXBTvQxhXA_"
                      title="ADC Voltmeter"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                    Embedded programming in C: ADC voltmeter
                  </p>
                  <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                    <p className="text-sm text-slate-500">
                      I created a voltmeter using a Raspberry Pi Pico 2 W microcontroller, potentiometer, and 7-segment 4-digit LED display.
                      Apart from the SDK library, all code was written from scratch. The display ran on a timer interrupt, and output was
                      based on the ADC reading of the potentiometer's wiper pin.
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
          </ProjectSection>
        </div>



        {/* ===== End-to-End Engineering Project: Mini CNC Mill ===== */}
        <div className="border rounded-3xl text-slate-400/50 mb-12 pt-4 bg-black/70 min-w-[410px]">
          <ProjectSection title="End-to-End Engineering Project: Mini CNC Mill">
            {/* MQP mini CNC mill */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/Cx7HpJapaZQ?si=XWw0iW-Nd3knbpQy"
                    title="Major Qualifying Project"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  Major Qualifying Project (MQP): mini CNC mill
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This is the final presentation video for our eleven-member Major Qualifying Project (MQP) team at WPI. I
                    narrated the video and demonstrated my CAD (SOLIDWORKS), MATLAB, and KiCad schematic work.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill: presentation of finalized R&D phase */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/4MgPYenIZXw?si=HAi-hV11wRllbVWy"
                    title="MQP mini CNC mill: presentation of finalized R&D phase"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: presentation of finalized R&D phase
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video is a presentation of the finalized R&D phase for the mechanical bed leveling I designed for the MQP as a
                    senior at WPI. This video illustrates the real-world application of engineering principles and procedures I was
                    responsible for.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
            {/* MQP mini CNC mill: presentation of FMEA analysis for a tool probing concept */}
            <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
                <div className="w-full aspect-video mb-4">
                  <iframe
                    loading="lazy"
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/-mwcSxoPo5E?si=tWpsAsEATLx_ic8H"
                    title="MQP mini CNC mill: presentation of finalized R&D phase"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-base sm:text-xl mt-4 mb-2 text-slate-400">
                  MQP mini CNC mill: presentation of FMEA analysis for a tool probing concept
                </p>
                <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-500">
                    This video is a presentation of the FMEA analysis I did for a tool probing device I proposed to the MQP team.
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          </ProjectSection>
        </div>
      </div>
    </div>
  );
}