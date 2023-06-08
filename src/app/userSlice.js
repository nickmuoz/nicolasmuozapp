// import React from "react";
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name : "",
    id: "",
    email: "",
    phone: "", 
    type:"",
    authStatus: "false"

}

export const userSlice = createSlice({
    name: "user" ,
    initialState,
    reducers:{
        addUser:(state, action) =>{
            const {name, id,email,phone, type, authStatus} = action.payload;
            state.name = name;
            state.id = id;
            state.email = email;
            state.phone = phone;
            state.type = type;
            state.authStatus = authStatus;
        }
        , 
        changeEmail:(state, action) =>{
            state.email = action.payload
        },
        changeStatus:(state, action) =>{
            state.authStatus =
            action.payload 
        },
        deleteUser:(state) => {
            state.name = '';
            state.id = '';
            state.email = '';
            state.phone = '';
            state.type = '';
            state.authStatus = 'false';
            
        }
    }
})

export const {addUser, changeEmail, changeStatus, deleteUser} = userSlice.actions;
export default userSlice.reducer;