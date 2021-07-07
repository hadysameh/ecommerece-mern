import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:localStorage.getItem('user'),
        token:localStorage.getItem('token'),
        
        
    },
    reducers:{
        setUser:(state,action)=>{
            // console.log(action.payload) action.payload is exactly the passed value
            localStorage.setItem('user', action.payload);
            console.log(localStorage.getItem('user'))
            state.user=action.payload
        },
        setToken:(state,action)=>{  
            // console.log(action.payload)
            localStorage.setItem('token', action.payload);
            console.log(localStorage.getItem('token'))
            state.token=action.payload

        }
    }
})
export const { setUser, setToken } = userSlice.actions

export default userSlice.reducer