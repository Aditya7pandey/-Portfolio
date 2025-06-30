import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/Toggle/ToggleSlice";

export const store = configureStore({
    reducer:{
        toggle:toggleReducer,
    }
})