import {styled} from "@mui/material/styles";
import {Chip} from "@mui/material";

export const StyledChip = styled(Chip)<{ labelColor: string }>(
        ({theme, labelColor}) => (
                {

                        backgroundColor: labelColor,
                        color: theme.palette.getContrastText(labelColor)
                }
        )
);