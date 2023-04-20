import { ImageVertical } from "../ImageWrapper/ImageVertical";

interface CalendarDateCardInterface {
  date: string;
  text: string;
  subText?: string;
  additionalClass?: string;
  imgSrc?: string;
}

export const CalendarDateCard = ({
  date,
  text,
  subText,
  additionalClass,
  imgSrc,
}: CalendarDateCardInterface) => {
  const specialGuest = subText !== undefined ? `(${subText})` : null;

  return (
    <div className={"dateCard " + additionalClass}>
      <div className="line"></div>
      <div className="eventDate">{date}</div>
      <div className="eventName">{text}</div>
      <div className="eventGuest">{specialGuest}</div>
      {imgSrc !== undefined ? (
        <ImageVertical imgSrc={imgSrc} altText="img" />
      ) : null}
    </div>
  );
};
