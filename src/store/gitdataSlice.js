import { createSlice } from "@reduxjs/toolkit";

export const gitdataSlice = createSlice({
    name: "gitdata",
    initialState:{
        repos:[]
    },
    reducers:{
        addRepos: function (state,action){
            state.repos = action.payload.repos
        },
        removeRepos: function (state){
            state.repos = []
        }
    }
})
export default gitdataSlice.reducer

 export const {addRepos, removeRepos} = gitdataSlice.actions