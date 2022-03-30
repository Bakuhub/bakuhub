import {createSlice} from "@reduxjs/toolkit";
import {ThreadConnectType} from "../../types";

export const threadSlice = createSlice({
    name: "thread",
    initialState: {
        connector: {
            type: ThreadConnectType.VISION,
            id: null
        },
        parentThreadId: null
    },
    reducers: {
        setConnector: (state, action) => {
            state.connector = action.payload;
        },
        setParentThreadId: (state, action) => {
            state.parentThreadId = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {setConnector, setParentThreadId} = threadSlice.actions;

export const threadReducer = threadSlice.reducer;