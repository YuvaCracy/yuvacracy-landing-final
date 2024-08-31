'use client'
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const SmoothScroll = (scrollToId) => {
  const router = useRouter();
  console.log("I am in smooth scroll mode:", scrollToId)
  const scrollRef = useRef(null);

  useEffect(() => {
    const targetElement = document.getElementById(scrollToId);
    if (targetElement) {
      const offset = -150;
      const y = targetElement.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [scrollToId, router]);

  return null;
};

export default SmoothScroll;
