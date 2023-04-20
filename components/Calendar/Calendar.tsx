import { CalendarDateCard } from "./CalendarDateCard";
import { CalendarHeading } from "./CalendarHeading";

export const Calendar = () => {
  return (
    <div className="calendar">
      <CalendarHeading
        variant="basic"
        monthName={"October"}
        subHeading="upcoming events"
      />
      <div className="calendarGrid">
        <CalendarDateCard date={"04"} text={"Night ride"} />
        <CalendarDateCard date={"15"} text={"Ostin Park"} />
        <CalendarDateCard date={"20"} text={"On road meet"} />
        <CalendarDateCard
          additionalClass="calendarCardAdditional"
          date={"30"}
          text={"Milers car Park"}
          subText={"special guest"}
        />
      </div>
    </div>
  );
};
