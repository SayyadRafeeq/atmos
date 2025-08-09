"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Search() {
    const [search, setSearch] = useState("");
    const [suggested, setSuggested] = useState<any[]>([]);
    const router = useRouter();
    const handleSuggestion = async (event: any) => {
        try {
            const value = event.target.value;
            setSearch(value);
            const result = await axios.get(
                "https://autocomplete.search.hereapi.com/v1/autocomplete",
                {
                    params: {
                        q: value,
                        apikey: process.env.NEXT_PUBLIC_HERE_API_KEY,
                    },
                }
            );
            setSuggested(result.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = async (address: any) => {
        try {
            if (address) {
                const result = await axios.get(
                    "https://geocode.search.hereapi.com/v1/geocode",
                    {
                        params: {
                            q: address,
                            apikey: process.env.NEXT_PUBLIC_HERE_API_KEY,
                        },
                    }
                );
                const data = result.data.items[0];
                const queryString = `title=${data.title}&lat=${data.position.lat}&lng=${data.position.lng}`;
                router.push("/weatherPage" + "?" + queryString);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <><div className="w-72">
             <input
                type="text"
                placeholder="Search Location....."
                className="border border-white focus:outline-none focus:ring-0 focus:ring-offset-0 p-2 bg-white rounded-sm w-full"
                onChange={handleSuggestion}
                value={search}
            />
        </div>
           
            {search && suggested.length>0 && (
                <div>
                    <ul className="bg-white h-40 overflow-y-auto w-72 mt-1 no-scrollbar rounded-sm">
                        {suggested.map((result,Index)=>(
                            <li 
                            key={Index}
                            className="w-full px-4 py-2 hr cursor-pointer"
                            onClick={()=>handleSearch(result.title)}>
                                {result.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Search;
