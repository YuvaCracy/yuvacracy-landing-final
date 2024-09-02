'use client'
import { useEffect } from 'react';

const useSmoothScroll = (scrollToId = "") => {
  useEffect(() => {
    if (scrollToId) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        const offset = -100;
        const y = targetElement.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [scrollToId]);
};

export default useSmoothScroll;
