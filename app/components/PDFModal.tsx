"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export default function PDFModal({
  isOpen,
  onClose,
  pdfUrl,
  title = "Document Preview",
}: PDFModalProps) {
  const [loaded, setLoaded] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Delay showing PDF for slight pre-load
  useEffect(() => {
    if (isOpen) {
      setLoaded(false);
      const timer = setTimeout(() => {
        setShowPDF(true);
      }, 300); // 300ms delay
      return () => clearTimeout(timer);
    } else {
      setShowPDF(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Modal container */}
      <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-4xl mx-2 sm:mx-4 rounded-xl shadow-xl overflow-hidden bg-black">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
          <h3 className="text-sm md:text-base font-medium text-slate-400">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close PDF viewer"
            className="text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* PDF container */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] bg-black flex items-center justify-center">
          {/* Loading mask */}
          {!loaded && (
            <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
              <span className="text-neutral-400 text-sm">
                Loading document…
              </span>
            </div>
          )}

          {/* PDF iframe */}
          {showPDF && (
            <iframe
              src={pdfUrl}
              className="w-full h-full max-w-full max-h-full"
              onLoad={() => setLoaded(true)}
              title={title}
            />
          )}
        </div>
        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-end px-4 py-3 border-t border-neutral-800 gap-2 sm:gap-0">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:-translate-y-0.5 transition-all duration-300 text-center sm:text-left"
          >
            Open in new tab (required on mobile to view full verified credential)
          </a>
        </div>
      </div>
    </div>
  );
}
