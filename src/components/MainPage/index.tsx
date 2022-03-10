import {Button, Grid, TextField, Typography} from "@mui/material";
import PremiseOverview from "../Premise";
import CustomizedTimeline from "../Timeline";
import {CreatePremise} from "../Premise/CreatePremise";
import {useRouter} from "next/router";

export const MainPage = () => {
    const router = useRouter();
    return <Grid container spacing={1} justifyContent={"center"}>
        <Grid item container justifyContent={"center"} xs={12}>
            <Typography variant={"h6"}>
                Bakuhub
            </Typography>
            <Button variant={"outlined"} onClick={() => router.push("/create/premise")}>
                Create Premise
            </Button>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12}>
            <TextField id="outlined-basic" label="Search" variant="outlined"/>
        </Grid>
        <Grid>
            <CreatePremise/>
        </Grid>
        <Grid item xs={4}>
            <CustomizedTimeline/>
        </Grid>
        {
            new Array(1).fill(1).map(
                    g => <Grid key={g} item><PremiseOverview/></Grid>
            )

        }
    </Grid>;
};