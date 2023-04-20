import Link from "next/link";
import { useDispatch } from "react-redux";
import { changePage } from "../../redux/mainSlice";

interface TextGroupInterface {
  title: string;
  text: string;
  spec?: string[];
  CTAText?: string;
  linkToAction?: string;
  additionalClass?: string;
}

export const TextGroup = ({
  text,
  title,
  spec,
  CTAText,
  linkToAction,
  additionalClass,
}: TextGroupInterface) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (linkToAction !== undefined) {
      dispatch(changePage(linkToAction));
    }
  };

  return (
    <div className={"textGroup " + additionalClass}>
      <div className="TextGroup-title">{title}</div>
      {spec !== undefined ? (
        <div className="TextGroup-spec">
          <span>
            Engine: <br></br>
            {spec[0]}
          </span>
          <span>
            Power: <br></br>
            {spec[1]}
          </span>
          <span>
            NM: <br></br>
            {spec[2]}
          </span>
          <span>
            Weight: <br></br>
            {spec[3]} kg
          </span>
          {/* {spec.split(",").map((item) => {
            const itemName= item.split(":")[0]
            return <span>{itemName}</span>;
          })} */}
        </div>
      ) : null}
      <div className="TextGroup-text">{text}</div>
      {CTAText !== undefined ? (
        <Link
          onClick={clickHandler}
          className="TextGroup-actionBTN"
          href={"/" + linkToAction?.toLowerCase()}
        >
          {CTAText} &gt;
        </Link>
      ) : null}
    </div>
  );
};
