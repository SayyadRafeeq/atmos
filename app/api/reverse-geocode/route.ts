// app/api/reverse-geocode/route.ts
import { NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return new Response(JSON.stringify({ error: "Missing lat or lon" }), {
      status: 400,
    });
  }

  try {
    const result = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
      params: {
        format: "json",
        lat,
        lon,
      },
      headers: {
        "User-Agent": "Atmos syedmohammadrafeeq7@gmail.com",
      },
    });

    return new Response(JSON.stringify(result.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Reverse geocoding error:", error.message);
    return new Response(JSON.stringify({ error: "Failed to fetch location" }), {
      status: 500,
    });
  }
}
