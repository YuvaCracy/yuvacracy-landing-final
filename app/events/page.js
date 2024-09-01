"use client";
import React, { useEffect } from 'react'
import {useRouter} from "nextjs-toploader/app";

const EventsPage = () => {
    const router = useRouter();
    useEffect(() => {
      router.push("events/upcoming-events");
    }, [router]);
    return <div></div>;
}

export default EventsPage