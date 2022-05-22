import {
    MergeRequestListItemProps
} from "@components/MergeRequest/MergeRequestsList/MergeRequestListItem/MergeRequestListItem";
import {FunctionComponent} from "react";
import {Grid, Typography} from "@mui/material";
import Link from "next/link";
import MergeRequestLabels from "@components/MergeRequest/MergeRequestLabels";

export const MergeRequestListItemPrimary: FunctionComponent<MergeRequestListItemProps> = (
        {mergeRequest}) => {
    return <Link href={`/review/mergeRequest/${mergeRequest.id}`}
                 passHref>
        <Grid container spacing={2}>
            <Grid item>
                <Typography noWrap variant={"body1"}>
                    {mergeRequest.title || "commit "}
                </Typography>
            </Grid>
            <Grid item>
                <MergeRequestLabels labelsOnConnectType={mergeRequest.labelsOnMergeRequest}/>
            </Grid>
        </Grid>
    </Link>;


};