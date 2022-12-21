import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'bought',
    initialState: [],
    reducers: {
        setState: (state, action) => {
            state = action.payload;
            return state
        }        
    }
}


const boughtSlice = createSlice(options);
export const {setState} = boughtSlice.actions;
export default boughtSlice.reducer;