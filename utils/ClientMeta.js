"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import generateMeta from "@/utils/MetaGenerator"; // Import your metadata generator function

export default function ClientMeta() {
  const pathname = usePathname();

  useEffect(() => {
    const meta = generateMeta(pathname);
    document.title = meta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = meta.description;
      document.head.appendChild(newMetaDescription);
    }
  }, [pathname]);

  return null;
}
