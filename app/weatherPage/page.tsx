"use client";

import { Suspense } from "react";
import WeatherPageContent from "./WeatherPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeatherPageContent />
    </Suspense>
  );
}
