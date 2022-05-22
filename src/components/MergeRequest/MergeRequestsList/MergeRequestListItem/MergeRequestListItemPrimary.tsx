import {
    MergeRequestListItemProps
} from "@components/MergeRequest/MergeRequestsList/MergeRequestListItem/MergeRequestListItem";
import {FunctionComponent} from "react";
import {Chip, Grid, Typography} from "@mui/material";

export const MergeRequestListItemPrimary: FunctionComponent<MergeRequestListItemProps> = (
        {mergeRequest}) => {

    return <Grid container spacing={2}>
        <Grid item>
            <Typography noWrap variant={"body1"}>
                {mergeRequest.title || "commit "}
            </Typography>
        </Grid>
        {
            mergeRequest.labelsOnMergeRequest?.map(({label}, index) =>
                                                           label ? <Grid item>
                                                               <Chip
                                                                       key={index}
                                                                       label={label.name}
                                                                       size={"small"}
                                                                       variant={"filled"}
                                                                       color={"warning"}
                                                               /></Grid>:null)
        }
    </Grid>;


};