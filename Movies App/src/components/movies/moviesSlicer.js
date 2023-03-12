import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    movies : []
}

export const getMovies = createAsyncThunk("getMovies", async(moviesId)=>{
    let url = "http://localhost:3000/movies"
    if(moviesId){
        url += "?moviesId=" + moviesId
    }
    const response = await fetch(url)
    return response.json()
    
})

export const getMoviesSlicer = createSlice({
    name : "movies",
    initialState,
    reducers : {

    },
    extraReducers : (build)=>{
        build.addCase(getMovies.fulfilled, (state, action)=>{
            state.movies = action.payload
        })
    }
})

export default getMoviesSlicer.reducer