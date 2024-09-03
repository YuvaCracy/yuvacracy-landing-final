"use client";
import React, { useEffect } from "react";
import {useRouter} from "nextjs-toploader/app";

const CentrePage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("centres/ycpr");
      }, [router]);
      return <div></div>;
}

export default CentrePage