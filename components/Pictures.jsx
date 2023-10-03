import Image from "next/image";
import Link from "next/link";
import ClientCounterComponent from "./ClientCounterComponent";

export default function Pictures(props) {
  return (
    <div
      className="flex-auto 
      flex-wrap 
      min-h-[300px] min-w-[40%] 
      justify-center 
      hidden sm:flex"
    >
      {props.stories.map((e) => jsonToJsx(e))}
    </div>
  );
}

function jsonToJsx(json) {
  return (
    <Link href={`story/${json.id}`}>
      <ClientCounterComponent>
        <Image src={json.imgSrc} height={200} width={300} className="m-2" />
      </ClientCounterComponent>
    </Link>
  );
}
