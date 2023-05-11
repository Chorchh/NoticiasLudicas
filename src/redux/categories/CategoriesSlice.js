import { createSlice } from "@reduxjs/toolkit";
import Data from "../../data/Data";

const INITIAL_STATE = {
  news: [],
  favs: [],
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
    handleFav: (state, action) => {
      const favNewsFiltered = Data.find((news) => news.id == action.payload);
      state.favs = [...state.favs, favNewsFiltered];
      console.log(state.favs);
      return state;
    },
  },
});

export const { getNews, handleFav } = categoriesSlice.actions;

export default categoriesSlice.reducer;
