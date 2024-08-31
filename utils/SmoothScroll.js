'use client'

import React, { useEffect, useRef } from 'react';

const SmoothScroll = (scrollToId) => {
  console.log("I am in smooth scroll mode:", scrollToId)
  const scrollRef = useRef(null);

  useEffect(() => {
    const targetElement = document.getElementById(scrollToId);
    if (targetElement) {
      const offset = -150;
      const y = targetElement.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [scrollToId]);

  return null;
};

export default SmoothScroll;
