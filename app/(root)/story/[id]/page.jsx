import AllStories from "@/components/AllStories";
import Story from "@/components/Story";
import { storiesUri } from "@/utils/pathUtils";

async function getData() {
  const res = await fetch(storiesUri);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function StoryPage(props) {
  const stories = await getData();
  const thisStory = stories.find((story) => story.id === props.params.id);

  return (
    <div className="flex flex-row">
      <div className="allStoriesCont hidden sm:flex flex-auto min-w-[300px]">
        <AllStories stories={stories} />
      </div>
      <div className="storyCont flex-auto">
        <Story story={thisStory} />
      </div>
    </div>
  );
}

// Static generation of stories
// export async function generateStaticParams() {
//   const stories = await getData();
//   console.log(`Generated static params of size ${stories.length}`);
//   return stories.map( story => ({ story, }));
// }
