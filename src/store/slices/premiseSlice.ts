import {createSlice} from "@reduxjs/toolkit";

export const premiseSlice = createSlice({
    name: "premise",
    initialState: {
        premises: [],
        activePremiseId: null,
    },
    reducers: {
        setActivePremises: (state, action) => {
            state.premises = action.payload;
        },
        setActivePremiseId: (state, action) => {
            console.info(state, action);
            state.activePremiseId = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const {setActivePremiseId, setActivePremises} = premiseSlice.actions;

export const premiseReducer = premiseSlice.reducer;