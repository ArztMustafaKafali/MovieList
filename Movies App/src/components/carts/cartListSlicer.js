import { createSlice } from "@reduxjs/toolkit";
import alertify from "alertifyjs";

const initialState = {
    carts : []
}

export const cartListSlicer = createSlice({
    name : "cartList",
    initialState,
    reducers : {
        addToCarts : (state, action)=>{
            let addedItem = state.carts.find((cart)=>{
                return(
                    action.payload.id === cart.id
                )
            })
            if(!addedItem){
                state.carts = [...state.carts, {...action.payload}]
                alertify.success(action.payload.title + " added to watchlist")

            }else{
                alertify.error(action.payload.title + " is already in watchlist")
            }

        },
        removeFromCarts : (state, action)=>{
            state.carts = state.carts.filter((cart)=>{
                return(
                    cart.id !==action.payload.id
                )
            })
        }
        
    }
})

export const {addToCarts, removeFromCarts} = cartListSlicer.actions
export default cartListSlicer.reducer