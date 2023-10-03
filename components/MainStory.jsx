import Image from "next/image";
import Link from "next/link";
import ClientCounterComponent from "./ClientCounterComponent";

export default function MainStory(props) {
  const imageStyle = {
    backgroundImage: `url(${props.story.imgSrc})`,
    backgroundSize: "cover",
  };

  return (
    <div className="h-[400px] w-[100vw] m-2 overflow-hidden -z-10">
      <Link href={`/story/${props.story.id}`}>
        <ClientCounterComponent>
          <div style={imageStyle} className="min-h-[400px] flex justify-center items-center">
            <div className="p-3 backdrop-blur-sm bg-black/30">
              <h2 className="text-white">{props.story.header}</h2>
            </div>
          </div>
        </ClientCounterComponent>
      </Link>
    </div>
  );
}
