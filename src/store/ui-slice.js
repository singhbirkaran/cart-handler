import {createSlice} from '@reduxjs/toolkit';

const uislice=createSlice({
    name:'ui-slice',
    initialState:{iscartvisible:false,notification:null},
    reducers:{
        toggle(state){
            state.iscartvisible=!state.iscartvisible;
        },
        shownotif(state,action){
            state.notification={status:action.payload.status,title:action.payload.title,message:action.payload.message}
        }
    }
})

export const uiactions=uislice.actions;
export default uislice;