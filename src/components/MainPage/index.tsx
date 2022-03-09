import {Grid, TextField, Typography} from "@mui/material";
import PremiseOverview from "../Premise";

export const MainPage = () => {

    return <Grid container spacing={1} justifyContent={"center"}>
        <Grid item container justifyContent={"center"} xs={12}>
            <Typography variant={"h6"}>
                Bakuhub
            </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12}>
            <TextField id="outlined-basic" label="Search" variant="outlined"/>
        </Grid>
        <Grid>

        </Grid>
        {
            new Array(1).fill(1).map(
                    g => <Grid key={g} item><PremiseOverview/></Grid>
            )

        }
    </Grid>;
};