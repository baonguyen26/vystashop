import { useEffect, useRef } from "react";

export const useAutoScroll = (
  scrollRef: React.RefObject<HTMLDivElement | null>,
  interval: number
) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollCarousel = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollRef.current.clientWidth;

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    intervalRef.current = setInterval(scrollCarousel, interval);

    return (
        () => {
            if(intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    );
  }, [scrollRef, interval]);
};
