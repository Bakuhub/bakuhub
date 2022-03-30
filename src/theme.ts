import {createTheme} from "@mui/material/styles";
import {ThemeOptions} from "@mui/material/styles/createTheme";

export const themeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: "#3f51b5",
        },
        secondary: {
            main: "#f5f100",
        },
    },
    typography: {
        body1: {
            whiteSpace: "pre-wrap"
        },
        h6: {
            cursor: "pointer"
        }
    }
};

export const theme = createTheme(themeOptions);