"use client"
import { GetStories } from "@/utils/localStorageUtils";
import Image from "next/image";
import { useEffect, useState } from "react";
type Story = {
  id: string;
  image: string;
  // add other fields if needed
};
export default function StoryContainer({ refresh }: { refresh?: number  }) {
   const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    setStories(GetStories());//GetStories() is only called on the client, after the component mounts.
  }, [refresh]); // Reload when refresh changes
  //The code inside useEffect will run every time the refresh prop changes.
  console.log("stories from story container",stories);
  return (
    <div className="flex gap-3 mt-10 min-w-screen  px-10">
          {stories.map((story) => (
          <div key={story.id} className="w-20 h-20 rounded-full bg-gradient-to-tr
           from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center"> 
                <Image
                  width={150}       
                  height={150}
                  src={story.image}
                  alt={`Story ${story.id}`}
                  className=" rounded-full border-3 transition-colors "
                />
              </div>
          </div>

          ))  }
      
    </div>
  );
}