import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

// const pageName = useSelector((state: RootState) => state.main.value);
// const dispatch = useDispatch();

interface EventDataInterface {
  id: number;
  eventName: string;
  date: string;
  img: string;
}

export interface MainSliceInterface {
  value: {
    allEvents: EventDataInterface[];
    currentShownEvents: EventDataInterface[];
    currentMonth: string;
  };
}

const initialState: MainSliceInterface = {
  value: {
    allEvents: [
      {
        id: 1,
        eventName: "Ostin Park",
        date: "10-6-2022",
        img: "bmw-m2",
      },
      {
        id: 2,
        eventName: "Jakson Street",
        date: "07-6-2022",
        img: "mercedes-amg",
      },
      {
        id: 3,
        eventName: "On road meet",
        date: "27-6-2022",
        img: "audi-s5",
      },
      {
        id: 4,
        eventName: "On road meet",
        date: "23-6-2022",
        img: "audi-s5",
      },
      {
        id: 5,
        eventName: "Night Ride",
        date: "09-7-2022",
        img: "audi-s5",
      },
      {
        id: 6,
        eventName: "Dilership meet",
        date: "21-7-2022",
        img: "mercedes-amg",
      },
      {
        id: 7,
        eventName: "Milres Track day",
        date: "19-7-2022",
        img: "bmw-m2",
      },
    ],
    currentShownEvents: [
      {
        id: 1,
        eventName: "Ostin Park",
        date: "10-6-2022",
        img: "bmw-m2",
      },
      {
        id: 2,
        eventName: "Jakson Street",
        date: "07-6-2022",
        img: "mercedes-amg",
      },
      {
        id: 3,
        eventName: "On road meet",
        date: "27-6-2022",
        img: "audi-s5",
      },
      {
        id: 4,
        eventName: "On road meet",
        date: "23-6-2022",
        img: "audi-s5",
      },
    ],
    currentMonth: "January",
  },
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    loadPrevEvents: (state) => {
      const [day, month, year] =
        state.value.currentShownEvents[0].date.split("-");

      const newEventsToShow = state.value.allEvents.filter((item) => {
        if (+item.date.split("-")[1] === +month - 1) {
          return item;
        }
      });
      if (newEventsToShow.length !== 0) {
        state.value.currentMonth = moment(new Date(+year, +month, +day)).format(
          "MMMM"
        );
        state.value.currentShownEvents = newEventsToShow;
      }
    },
    loadNextEvents: (state) => {
      const [day, month, year] =
        state.value.currentShownEvents[0].date.split("-");

      const newEventsToShow = state.value.allEvents.filter((item) => {
        if (+item.date.split("-")[1] === +month + 1) {
          return item;
        }
      });
      if (newEventsToShow.length !== 0) {
        state.value.currentMonth = moment(new Date(+year, +month, +day)).format(
          "MMMM"
        );
        state.value.currentShownEvents = newEventsToShow;
      }
    },
  },
});

export const { loadPrevEvents, loadNextEvents } = eventSlice.actions;
export default eventSlice.reducer;
