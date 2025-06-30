import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isToggled:false,
};

export const toggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        toggle:(state)=>{
            state.isToggled = !state.isToggled
        },

        setToggle:(state,action)=>{
            state.isToggled = action.payload;
        }
    }
})

export const {toggle,setToggle} = toggleSlice.actions;
export default toggleSlice.reducer;