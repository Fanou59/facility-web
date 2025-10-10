"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setIsScrolling(true);

        // Clear les timers précédents
        clearTimeout(scrollTimer);
        clearTimeout(hideTimer);

        // Timer pour détecter la fin du scroll
        scrollTimer = setTimeout(() => {
          setIsScrolling(false);

          // Timer pour cacher le bouton après 3 secondes d'inactivité
          hideTimer = setTimeout(() => {
            setIsVisible(false);
          }, 500);
        }, 100);
      } else {
        setIsVisible(false);
        setIsScrolling(false);
        clearTimeout(scrollTimer);
        clearTimeout(hideTimer);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg transform hover:scale-110 transition-all duration-300"
      size="icon"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
}
