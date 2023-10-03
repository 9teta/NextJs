import AllStories from "@/components/AllStories";
import MainStory from "@/components/MainStory";
import Pictures from "@/components/Pictures";
import { storiesUri } from "@/utils/pathUtils";

async function getData() {
  const res = await fetch(storiesUri);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function HomePage() {
  const stories = await getData();

  return (
    <section className="content flex flex-col">
      <div className="mainStorySect">
        <MainStory story={stories[1]} />
      </div>
      <div className="allStoriesSect flex justify-stretch">
        <AllStories stories={stories} />
        <Pictures stories={stories} />
      </div>
    </section>
  );
}
