import {
    MergeRequestListItemProps
} from "@components/MergeRequest/MergeRequestsList/MergeRequestListItem/MergeRequestListItem";
import {FunctionComponent} from "react";
import {Chip, Grid, Typography} from "@mui/material";
import Link from "next/link";

export const MergeRequestListItemPrimary: FunctionComponent<MergeRequestListItemProps> = (
        {mergeRequest}) => {
    return <Link href={"review/mergeRequest/[id]"} as={`/review/mergeRequest/${mergeRequest.id}`}
                 passHref>
        <Grid container spacing={2}>
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
        </Grid></Link>;


};