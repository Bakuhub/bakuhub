import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ThreadConnectType} from "../../types";

export interface ThreadConnector {
    type: ThreadConnectType;
    id: null | string;
}

export const threadSlice = createSlice({
    name: "thread",
    initialState: {
        connector: {
            type: ThreadConnectType.VISION,
            id: null as string | null
        },
        parentThreadId: null
    },
    reducers: {
        setConnector: (state, action: PayloadAction<ThreadConnector>) => {
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