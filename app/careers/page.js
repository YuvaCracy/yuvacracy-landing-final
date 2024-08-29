"use client";
import React, { useEffect } from "react";
import {useRouter} from "nextjs-toploader/app";

const CareerPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("careers/internships");
  }, [router]);
  return <div></div>;
};

export default CareerPage;
