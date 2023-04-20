import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice";
import eventReducer from "./eventsSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    event: eventReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
