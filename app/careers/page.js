"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("careers/internships");
  }, [router]);
  return <div></div>;
};

export default page;
