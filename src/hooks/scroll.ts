import { useMemo } from "react";

export const useScroll = (id: string = "scroll-top") => {
  const elementId = useMemo(() => id, []);

  const scroll = () => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return { elementId, scroll };
};
