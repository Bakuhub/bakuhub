import {createSlice} from "@reduxjs/toolkit";

export const threadSlice = createSlice({
    name: "thread",
    initialState: {
        threads: [],
        activeThreadId: null,
    },
    reducers: {
        setActiveThreads: (state, action) => {
            state.threads = action.payload;
        },
        setActiveThreadId: (state, action) => {
            console.info(state, action);
            state.activeThreadId = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const {setActiveThreadId, setActiveThreads} = threadSlice.actions;

export const threadReducer = threadSlice.reducer;