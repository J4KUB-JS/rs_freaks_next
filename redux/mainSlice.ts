import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const pageName = useSelector((state: RootState) => state.main.value);
// const dispatch = useDispatch();

export interface MainSliceInterface {
  value: string;
  isMenuOpen: boolean;
}

const initialState: MainSliceInterface = {
  value: "Home",
  isMenuOpen: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    openCloseMenu: (state) => {
      console.log("in state");
      console.log(!state.isMenuOpen);
      state.isMenuOpen = !state.isMenuOpen;
    },
    loadPrevEvents: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { changePage, openCloseMenu, loadPrevEvents } = mainSlice.actions;
export default mainSlice.reducer;
