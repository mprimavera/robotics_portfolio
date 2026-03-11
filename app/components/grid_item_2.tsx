"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export interface GridItemProps {
  icon: React.ReactNode;
  description?: React.ReactNode;
  link?: string;
  size?: number;
}

export const GridItem2 = ({
  icon,
  description,
  link,
  size = 90,

}: GridItemProps) => {

  const Wrapper = link ? "a" : "div"
  return (

        <Wrapper
      {...(link
        ? {
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}

        style={{
          width: size,
          height: size,
        }}

      className="relative
       rounded-2xl border
       p-4 
       md:p-6 
       md:rounded-
       3xl 
       w-full 
       mx-auto
       backdrop-blur-sm         
       flex
       flex-col
       items-center
       justify-center
       rounded-xl
       border
       p-3
       w-20
       h-20
       transition
">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        {/* Icon + Title */}
        <div className="flex items-center justify-center w-full h-full text-blue-500">
          <div className="flex-shrink-0">{icon}</div>
          <h3 className="text-xl font-semibold text-white text-center">
          </h3>
        </div>

        {description && (
          <div className="mt-3 text-sm text-neutral-400 text-center">
            {description}
          </div>
        )}

            </Wrapper>

  );
};
