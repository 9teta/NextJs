import Link from "next/link";
import ClientCounterComponent from "./ClientCounterComponent";

export default function AllStories(props) {
  return (
    <div className="flex-auto items-center min-h-[300px] min-w-[30%] m-2 pl-3">
      {props.stories.map((json) => jsonToJsx(json))}
    </div>
  );
}

function jsonToJsx(story) {

  return (
    <div className="py-3 ml-3 hover:underline hover:text-blue-600" key={story.id}>
      <ClientCounterComponent>
        <Link href={`/story/${story.id}`}> {story.header} </Link>
      </ClientCounterComponent>
    </div>
  );
}
