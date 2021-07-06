import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        token:null,
        test:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        setToken:(state,action)=>{  
            state.token=action.payload

        },
        test:(state,action)=>{
            state.test=action.payload
            console.log(state.test)
        },
        isAuthenticated(state){
            return state.token && state.user
        }
    }
})
export const { setUser, setToken ,test} = userSlice.actions

export default userSlice.reducer