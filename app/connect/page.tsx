"use client";

import { Box, Mail, MessageSquareText } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ContactForm from "../components/contact_page";
import { Vortex } from "@/components/ui/vortex";
import { Linkedin, Github, Youtube } from "lucide-react";
import { GridItem } from "../components/grid_item";

export default function ConnectPage() {
  return (
    <>
    {/* Fixed background image */}
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[url('/connect.jpeg')] bg-cover bg-center bg-no-repeat" /> 
      <div className="absolute inset-0 bg-black/70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]" /> 
    </div>


    {/* Content */}
    <div className="relative w-full min-h-[100svh] flex items-center justify-center px-4 md:px-8 lg:px-10">
      <ul className="w-full max-w-4xl grid gap-6">
        <div className="space-y-6">
          {/* Email direct */}
          {/* <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={<Mail className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="mailto:michael@mikhaelrobotics.ai"
                  className="text-center break-all sm:break-normal"
                >
                  michael@mikhaelrobotics.ai
                </a>
              }
              description={null}
            />
          </div> */}
          {/* LinkedIn */}
          <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={<Linkedin className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="https://www.linkedin.com/in/algorithmichael/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center break-normal"
                >
                  Michael Primavera
                </a>
              }
              description={null}
            />
          </div>
          <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={<Github className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="https://github.com/mprimavera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center break-normal"
                >
                  Visit My GitHub
                </a>
              }
              description={null}
            />
          </div>
          <div className="w-full max-w-md mx-auto">
            <GridItem
              icon={<Youtube className="h-6 w-6 text-neutral-400" />}
              title={
                <a
                  href="https://www.youtube.com/watch?v=Cx7HpJapaZQ&list=PL1Ee_XSiTSM1GA_aDLcfJW1ZUOly3xfva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center break-normal"
                >
                  Engineering Playlist
                </a>
              }
              description={null}
            />
          </div>
        </div>
      </ul>
    </div>
    </>
  );
}
