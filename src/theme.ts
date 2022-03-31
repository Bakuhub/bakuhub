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
        // used in description and body for premise
        body1: {
            whiteSpace: "pre-wrap"
        },
        // for link
        h6: {
            cursor: "pointer"
        },
        // user name
        h4: {
            fontWeight: 700,
            fontSize: "1.125rem",
        },
        // grey
        subtitle2: {
            color: "grey",
            paddingLeft: "20px"
        }
    }
};

export const theme = createTheme(themeOptions);