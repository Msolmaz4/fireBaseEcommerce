import { createSlice } from '@reduxjs/toolkit'
//kisayol rsxkslice ekrana gelir jhait kodlar
const initialState = {
    isLoggedIn :false,
    email:null,
    useName:null,
    userID:null,

}

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER :(state,action)=>{
console.log(action.payload)
    }
  }
});

export const {SET_ACTIVE_USER} = authSlice.actions
export const selectIsLoggedIn = (state)=>state.auth.isLoggedIn
export const selectEmail = (state)=>state.auth.email
export const selectUserName = (state)=>state.auth.useName
export const selectUserID = (state)=>state.auth.userID

export default authSlice.reducer