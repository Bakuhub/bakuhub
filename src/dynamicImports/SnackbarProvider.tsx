import {FunctionComponent, PropsWithChildren} from "react";
import {Collapse} from "@mui/material";
import {SnackbarProvider as SP} from "notistack";

const SnackbarProvider: FunctionComponent<PropsWithChildren<{}>> =
        ({children}) =>
                <SP
                        maxSnack={3}
                        autoHideDuration={5000}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        TransitionComponent={Collapse}
                        iconVariant={{
                            success: "✅ ",
                            error: "✖️",
                            warning: "⚠️",
                            info: "ℹ️",
                        }}>
                    {children}
                </SP>;


export default SnackbarProvider;