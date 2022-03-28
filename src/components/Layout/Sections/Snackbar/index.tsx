import {Alert, Snackbar} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import {setIsOpen} from "../../../../store/slices/snackbarSlice";

export const LayoutSnackbar = () => {
    const dispatch = useDispatch();
    const {isOpen, alertColor, snackbarMsg} = useSelector((state: RootState) => state.snackbar);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason==="clickaway") {
            return;
        }
        dispatch(setIsOpen(false));
    };
    return <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertColor} sx={{width: "100%"}}>
            {snackbarMsg}
        </Alert>
    </Snackbar>;
};