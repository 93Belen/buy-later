import { configureStore } from "@reduxjs/toolkit";
import boughtSlice from "../Slices/boughtSlice";
import itemsSlice from "../Slices/itemsSlice";

const store = configureStore({
    reducer: {
        items: itemsSlice,
        bought: boughtSlice
    }
})

export default store;