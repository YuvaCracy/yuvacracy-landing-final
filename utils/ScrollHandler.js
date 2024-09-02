'use client'
import { useSearchParams } from "next/navigation";
import useSmoothScroll from "./SmoothScroll";

const ScrollHandler = () => {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scroll");

  useSmoothScroll(scrollTo);

  return;
};

export default ScrollHandler;