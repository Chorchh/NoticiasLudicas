import { createSlice } from "@reduxjs/toolkit";
import Data from "../../data/Data";

const INITIAL_STATE = {
  news: [],
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getNews: (state, action) => {
      if (action.payload) {
        const category = Data.filter(
          (news) => news.categoria === action.payload
        );
        state.news = category;
        return state;
      } else {
        state.news = Data;
        return state;
      }
    },
  },
});

export const { getNews } = categoriesSlice.actions;

export default categoriesSlice.reducer;
