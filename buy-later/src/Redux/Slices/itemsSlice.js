import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'items',
    initialState: [],
    reducers: {
        setState: (state, action) => {
            state = action.payload;
            return state
        }        
    }
}


const itemsSlice = createSlice(options);
export const {setState} = itemsSlice.actions;
export default itemsSlice.reducer;