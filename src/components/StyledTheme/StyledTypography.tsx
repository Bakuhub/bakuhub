import {styled} from "@mui/system";
import {Typography} from "@mui/material";

export const StyledTypography = styled(Typography)<{ color: string }>(
        ({theme, color}) => (
                {

                    backgroundColor: color,
                    color: theme.palette.getContrastText(color)
                }
        )
);