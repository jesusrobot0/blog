import { useEffect, useRef, useState } from "react";

interface Props {
  navHeight: number;
  reset: any;
}

export function useNavigationSectionTracker({ navHeight, reset }: Props) {
  const [currentSection, setCurrentSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null); // *

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect(); // Desconectar el observer actual
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const section = element.dataset.bgNav;
            if (section !== undefined) {
              setCurrentSection(section);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: `-${navHeight}px 0px -80% 0px`, // Ajuste para que la intersección ocurra justo después de la barra de navegación
        threshold: 0.01, // Un threshold pequeño para activar rápidamente el cambio
      }
    );

    observerRef.current = observer; // *

    const sections = ["white", "primary", "black"];

    sections.forEach((section) => {
      const elements = document.querySelectorAll(`[data-bg-nav="${section}"]`);
      const arrayElements = Array.from(elements);
      arrayElements.map((element) => {
        observer.observe(element);
      });
    });

    // Clean Up del efecto
    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [reset]); // * Se vuelve a ejecutar cada vez que se cambia de página

  return currentSection;
}
