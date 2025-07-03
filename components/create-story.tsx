"use client";
import { v4 as uuidv4 } from "uuid";
import { Camera, Plus } from "lucide-react";
import { useRef, useState } from "react";
import {cn} from "@/lib/utils";
import { resizeImageToBase64 } from "@/utils/imageUtils";
import { uuid } from "zod/v4";
import { SaveStory } from "@/utils/localStorageUtils";
import { Story } from "@/lib/type-verification";
export default function CreateStory({onStoryAdded}: {onStoryAdded?: () => void}) {
    const [hovered, setHovered] = useState(false);
    const fileInputRef=useRef<HTMLInputElement>(null);
    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }
    const refreshStories = () => {
        console.log("Stories refreshed");
        window.location.reload();
    }
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(!file) return;
        try{
            const base64 = await resizeImageToBase64(file);
            const newStory:Story={
                id:uuidv4(),
                image: base64,  
                createdAt: Date.now(),
            }
            console.log("New Story Created:", newStory);
            SaveStory(newStory);
         if(onStoryAdded){
            onStoryAdded();
         }
        }
        catch(error){
            console.error("Error resizing image:", error);
        }
    }
    return(
        <div className="flex flex-col justify-center max-w-xs ">
             <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
            />
            <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleDivClick}
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