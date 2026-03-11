"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function NavbarMenu() {
  const navItems = [
    {
      name: "Quantitative R&D",
      link: "/quantitative_research_development",
    },
    {
      name: "Experience Timeline",
      link: "/experience_timeline",
    },
    {
      name: "Education",
      link: "/education",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full bg-neutral-950">
      <Navbar >
        {/* Desktop Navigation */}
        <NavBody>
        {/* Logo Link */}
        <a
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal hover:-translate-y-0.5 transition-all
           duration-300"
        >
          {/* <img
            src=""
            alt="logo"
            width={50}
            height={50}
          /> */}
          <span className="font-medium font-semibold text-blue-400">Michael Primavera</span>
        </a>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Link href="/connect">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none
              active:outline-none hover:-translate-y-0.5 transition-all duration-300 w-[9rem]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
                bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3
                py-1 text-sm font-medium text-slate-400 backdrop-blur-3xl">
                  Connect
                </span>
              </button>
            </Link>
          </div>
        </NavBody>
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
        {/* Logo Link */}
        <a
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal hover:-translate-y-0.5
          transition-all duration-300"
        >
          {/* <img
            src=""
            alt="logo"
            width={50}
            height={50}
          /> */}
          <span className="font-medium font-semibold text-blue-400">Michael Primavera</span>
        </a>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-slate-400"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex flex-col gap-4 w-[12rem]">
              <Link href="/connect"
               onClick={() => setIsMobileMenuOpen(false)}>
              <button className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[2px] hover:p-[3px] transition-all
              duration-300 focus:outline-none active:outline-none">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
                  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm
                  font-medium text-slate-400 backdrop-blur-3xl">
                    Connect
                  </span>
                </button>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
};
