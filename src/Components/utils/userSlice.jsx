import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:"Gopal",
    reducers:{

        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,acton)=>{
            return null;
        }


    }
})

export  const{addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;