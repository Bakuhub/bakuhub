import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AlertColor} from "@mui/material";

export const snackbarSlice = createSlice({
    name: "snackbar",
    initialState: {
        isOpen: false,
        alertColor: "info" as AlertColor,
        snackbarMsg: ""
    },
    reducers: {
        setAlertColor: (state, action) => {
            state.alertColor = action.payload;
        },
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        },
        setSnackbarMsg: (state, action) => {
            state.snackbarMsg = action.payload;
        },
        openSnackBar: (state, action: PayloadAction<{
            isOpen?: boolean
            alertColor?: AlertColor
            snackbarMsg?: string
        }>) => {
            return {
                ...state,
                ...action.payload
            };
        }
    },
});

// Action creators are generated for each case reducer function
export const {setIsOpen, setAlertColor, setSnackbarMsg, openSnackBar} = snackbarSlice.actions;

export const snackbarReducer = snackbarSlice.reducer;