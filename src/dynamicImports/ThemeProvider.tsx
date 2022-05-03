import {ThemeProvider as TP} from "@mui/material/styles";
import {FunctionComponent, PropsWithChildren} from "react";
import {theme} from "../theme";

const ThemeProvider: FunctionComponent<PropsWithChildren<{}>> = ({children}) => <TP theme={theme}>
    {children}
</TP>;


export default ThemeProvider;