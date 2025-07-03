"use client";
import { Camera, Plus } from "lucide-react";
import { useState } from "react";
import {cn} from "@/lib/utils";
import { z } from 'zod'
export default function CreateStory(){
    const [hovered, setHovered] = useState(false);
    return(
        <div className="flex flex-col justify-center max-w-xs ">
            <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn("rounded-full border-dashed border-2 ms-7 mt-10 border-gray-500 flex text-center justify-center items-center bg-gray-200 p-3 h-16 w-15 cursor-pointer",hovered && "border-violet-500")}>
                
                <Camera className={cn("h-6 w-6 text-gray-600",hovered && "text-violet-600")} />
                <div className="rounded-full bg-blue-500 border-white h-4 w-4 flex justify-center items-center absolute mt-13 ms-10">
                    <Plus className="h-3 w-3 text-white" />
                </div>
            </div>
            <div className="flex flex-col justify-center ms-5 mt-5">
                <span className="font-semibold ms-2">Your Story</span>
                <span className="text-gray-500">Tap to create</span>
            </div>
        </div>
    )
}