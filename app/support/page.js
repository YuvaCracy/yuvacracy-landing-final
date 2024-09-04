'use client';
import {useRouter} from "nextjs-toploader/app";
import React, { useEffect } from "react";

const SupportPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/support/donate");
  }, [router]);
  return <div></div>;
};

export default SupportPage;
