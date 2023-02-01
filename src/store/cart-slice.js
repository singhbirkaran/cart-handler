import { createSlice } from "@reduxjs/toolkit";


const cartslice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalquantity:0,
        changed:false
    },
    reducers:{
        additemtocart(state,action){
            const newItem=action.payload;
            const existingitem=state.items.find((item)=>item.id===newItem.id);
            state.totalquantity++;
            state.changed=true;
            if(!existingitem){
                state.items.push({
                    id:newItem.id,
                    itemprice:newItem.price,
                    totalprice:newItem.price,
                    quantity:1,
                    name:newItem.title
                }
                )
            }
            else{
                existingitem.quantity++;
                existingitem.totalprice=existingitem.totalprice+existingitem.itemprice;
            }
        },

        removeitemfromcart(state,action){
            const id=action.payload;
            const existingitem=state.items.find((item)=>item.id===id);
            state.totalquantity--;
            state.changed=true;
            if (existingitem.quantity===1){
                state.items=state.items.filter(item=> item.id!==id);
            }
            else{
                existingitem.quantity--;
                existingitem.totalprice=existingitem.totalprice-existingitem.itemprice;
            }
        },

        replacecart(state,action){
            state.totalquantity=action.payload.totalquantity;
            state.items=action.payload.items;
        }
    }
})

export const cartactions=cartslice.actions;
export default cartslice;