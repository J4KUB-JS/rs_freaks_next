import { useDispatch } from "react-redux";
import { loadNextEvents, loadPrevEvents } from "../../redux/eventsSlice";

interface CalendarHeadingInterface {
  monthName: string;
  subHeading?: string;
  variant: "slider" | "basic";
}

export const CalendarHeading = ({
  monthName,
  subHeading,
  variant,
}: CalendarHeadingInterface) => {
  const dispatch = useDispatch();
  const nextEventsHandler = () => {
    dispatch(loadNextEvents());
  };
  const prevEventHandler = () => {
    dispatch(loadPrevEvents());
  };

  return (
    <div className="dateWrapper">
      {subHeading !== undefined ? (
        <div
          className={variant === "slider" ? "subHeadingSlider" : "subHeading"}
        >
          {subHeading}
        </div>
      ) : null}
      {variant === "slider" ? (
        <span onClick={prevEventHandler} className="arrow">
          &lt;
        </span>
      ) : null}
      <span className="monthName">{monthName}</span>
      {variant === "slider" ? (
        <span onClick={nextEventsHandler} className="arrow">
          &gt;
        </span>
      ) : null}
    </div>
  );
};
