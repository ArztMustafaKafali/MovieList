import { configureStore } from "@reduxjs/toolkit";
import cartListSlicer from "../../components/carts/cartListSlicer";
import categorySlicer from "../../components/category/categorySlicer";
import  getMoviesSlicer  from "../../components/movies/moviesSlicer";
import naviSlicer from "../../components/navi/naviSlicer";

export const store =configureStore({
    reducer:{
        movies : getMoviesSlicer,
        categories : categorySlicer,
        carts : cartListSlicer,
        content : naviSlicer
    }
})