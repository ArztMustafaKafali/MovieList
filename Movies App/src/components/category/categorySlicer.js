import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories : [],
    currentCategory : ""
}

export const getMoviesId = createAsyncThunk("getMoviesId", async()=>{
    const response = await fetch("http://localhost:3000/moviesId")
    return response.json()
})

export const categorySlicer = createSlice({
    name : "category",
    initialState,
    reducers : {
        changeCategory : (state, action)=>{
            state.currentCategory = action.payload
        }
    },
    extraReducers : (build)=>{
        build.addCase(getMoviesId.fulfilled, (state,action)=>{
            state.categories = action.payload
        })
    }
})
export const {changeCategory} = categorySlicer.actions
export default categorySlicer.reducer