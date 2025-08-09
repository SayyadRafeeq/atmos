"use client";

import CurrentWeather from "@/components/WeatherPage/CurrentWeather";
import DayLight from "@/components/WeatherPage/DayLight";
import Loader from "@/components/WeatherPage/Loader";
import TabList from "@/components/WeatherPage/TabList";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Map = dynamic(() => import("@/components/WeatherPage/Map"), { ssr: false });

export default function WeatherPageContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main>
      <div className="bg-gray-100 min-h-screen relative">
        <section className="rounded-lg bg-slate-400 relative lg:p-10 xl:p-12 2xl:p-14">
          <div className="absolute inset-0 z-0">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg"
              alt="background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="text-white relative z-10 mx-auto w-full p-8 lg:p-0 xl:p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-9">
            <div className="lg:col-span-2 sm:col-span-2">
              <CurrentWeather latitude={lat} longitude={lng} />
            </div>
            <div className="lg:col-span-1 sm:col-span-1">
              <DayLight latitude={lat} longitude={lng} />
            </div>
            <div className="lg:col-span-2 sm:col-span-3">
              <Map coordinates={[Number(lat), Number(lng)]} />
            </div>
          </div>

          <div className="mt-8 lg:mt-12">
            <TabList latitude={lat} longitude={lng} />
          </div>
        </section>
      </div>
    </main>
  );
}
