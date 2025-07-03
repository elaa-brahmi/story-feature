import CreateStory from "@/components/create-story";
import StoryContainer from "@/components/StoryContainer";


export default function Home() {
  return (
   <div className="flex flex-col ">
    <CreateStory/>
    <StoryContainer/>
   </div>
  );
}
