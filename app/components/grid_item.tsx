"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export interface GridItemProps {
  area?: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export const GridItem = ({
  area = "auto",
  icon,
  title,
  description,
}: GridItemProps) => {
  return (
    <li className={`list-none ${area}`}>
      <div className="relative rounded-2xl border p-4 md:p-6 md:rounded-3xl w-full mx-auto backdrop-blur-sm">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        {/* Icon + Title */}
        <div className="flex items-center justify-center gap-3 min-w-0
          hover:-translate-y-0.5 transition-all duration-300">
          <div className="flex-shrink-0">{icon}</div>
          <h3 className="
            text-sm lg:text-xl md:text-lg sm:text-sl
            font-semibold text-blue-400 text-center
            break-normal whitespace-normal">
            {title}
          </h3>
        </div>

        {description && (
          <div className="mt-3 text-sm text-blue-400 text-center">
            {description}
          </div>
        )}
      </div>
    </li>
  );
};
