"use client";
import CreateStory from "@/components/create-story";
import StoryContainer from "@/components/StoryContainer";

import { useState } from "react";
export default function Home() {
  const [refresh, setRefresh] = useState(0);
  return (
   <div className="flex flex-col ">
    <CreateStory onStoryAdded={() => setRefresh(r => r + 1)}/>
    <StoryContainer refresh={refresh}/>
   </div>
  );
}
