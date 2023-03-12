import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content : ""
}

export const naviSlicer = createSlice({
    name : "content",
    initialState,
    reducers : {
        filterInput : (state, action)=>{
            state.content = action.payload
        }
    }
})

export const {filterInput} = naviSlicer.actions
export default naviSlicer.reducer