import Image from "next/image";

export default function Story(props) {

  return (
    <div className="story 
    flex flex-col [&>*]:p-4">
      <h2 className="story__header text-center">{props.story.header}</h2>
      <div className="story__image">
        <Image src={props.story.imgSrc} height={400} width={600}/>
      </div>
      <div className="story__text">{props.story.text}</div>
      <div className="story__author">{props.story.author}</div>
      <div className="story__date">{props.story.date}</div>
    </div>
  )
}
