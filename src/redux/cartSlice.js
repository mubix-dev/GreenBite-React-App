import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers:{
        addItem: function(state,action){
            let existedItem =  state.find((item)=>item.id === action.payload.id)
            if(existedItem){
                return state.map((item)=>item.id === action.payload.id && item.quantity <10 ? {...item,quantity:item.quantity+1}:item)
            }else{
                state.push(action.payload)
            }
            toast.success("Item added")
        },
        removeItem: function(state,action){
            return state.filter((item)=>item.id!==action.payload)
            
        },
        incrementQty:function(state,action){
            return state.map((item)=>(item.id === action.payload && item.quantity <10 ? {...item,quantity:item.quantity+1}:item))
        },
        decrementQty:function(state,action){
            return state.map((item)=>(item.id === action.payload && item.quantity>1 ? {...item,quantity:item.quantity-1}:item))
        },
        clearCart:function(){
            return []
        }
    }
})

export const {addItem,removeItem,incrementQty,decrementQty,clearCart} = cartSlice.actions
export default cartSlice.reducer