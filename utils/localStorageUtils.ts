"use client";
import {Story} from "@/lib/type-verification";
export const GetStories=():Story[]=>{
     if (typeof window === "undefined" || !window.localStorage) {
        return [];
    }
    const storiesStr = localStorage.getItem("stories") || "[]";
    let stories: Story[];
    try {
        stories = JSON.parse(storiesStr);
    } catch {
        stories = [];
    }
    const now = Date.now();
    console.log(stories.filter((s: Story) => now - s.createdAt < 86400000))
    return stories.filter((s: Story) => now - s.createdAt < 86400000); 
}
export const SaveStory=(story:Story)=>{
    const stories=GetStories();
    stories.push(story);
    localStorage.setItem("stories",JSON.stringify(stories));
}