import { useEffect, useRef, useState } from "react";

interface Props {
  navHeight: number;
  reset: any;
}

export function useNavigationSectionTracker({ navHeight, reset }: Props) {
  const [currentSection, setCurrentSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null); // *

  useEffect(() => {
    console.log("Cambio a la ruta:", reset);
    if (observerRef.current) {
      observerRef.current.disconnect(); // Desconectar el observer actual
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("currentsection:", entry.target.id);
            setCurrentSection(entry.target.id);
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

    const sections = ["header", "post-list", "footer", "category-header"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [reset]); // * Se vuelve a ejecutar cuando se cambia de página

  return currentSection;
}
