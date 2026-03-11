'use client'

import { useState, useRef, useEffect } from "react"

type AccordionItem = {
  title: string
  content: React.ReactNode
  defaultOpen?: boolean
}

type AccordionProps = {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(() => {
    const i = items.findIndex(item => item.defaultOpen)
    return i !== -1 ? i : null
  })

  return (
    <div className="mx-auto w-full max-w-[85%] sm:max-w-sm md:max-w-lg">
      <div className="border border-slate-400/50 rounded-lg overflow-hidden">
        {items.map((item, index) => (
          <AccordionRow
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            isFirst={index === 0}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  isFirst,
  isLast,
}: {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
  isFirst: boolean
  isLast: boolean
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState("0px")

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px")
    }
  }, [isOpen])

  return (
    <div
      className={`backdrop-blur-md px-3 py-0
        ${isFirst ? "rounded-t-lg" : ""} 
        ${isLast ? "rounded-b-lg" : ""}`}
    >
      <button
        onClick={onToggle}
        className="flex w-full justify-between items-center px-3 py-3 text-sm sm:text-sm md:text-md lg:text-lg font-medium text-blue-300/75
          transition-all duration-300 hover:-translate-y-0.5"
      >
        <span className="text-left w-full">{item.title}</span>

        {/* Circle with + / - */}
        <div className="flex items-center justify-center h-6 w-6 rounded-full border border-blue-300/50">
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
            </svg>
          )}
        </div>
      </button>

      {/* CONTENT */}
      <div
        style={{ maxHeight: height }}
        className="overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out"
      >
        <div
          ref={contentRef}
          className={`px-6 text-slate-500 transition-opacity duration-500 bg-black/70 rounded-lg pt-1 pb-1
            ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          {item.content}
        </div>
      </div>
    </div>
  )
}
