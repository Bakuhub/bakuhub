import {Grid, Tooltip, Typography} from "@mui/material";
import {get} from "lodash";
import {useRouter} from "next/router";
import {Vision} from "../../../../prisma/generated/type-graphql";

export const MergeRequestOverview = () => {
    const router = useRouter();
    const allOtherVisions: Vision[] = [];
    return <Grid item container xs={4} alignContent={"flex-start"}>
        <Grid item xs={12}>
            <Typography variant={"h5"}>Merge requests opened:</Typography>
        </Grid>
        {
            allOtherVisions?.map(vision =>
                    <Grid key={vision.id} item container xs={12}>
                        <Tooltip title={get(vision, "mergeRequest.description", "")}>
                            <Typography
                                    variant={"h6"}
                                    key={vision.id}
                                    onClick={() => router.push(`/review/mergeRequest/${get(vision, "mergeRequest.id", false)}`)}
                            >
                                {get(vision, "mergeRequest.title", "")}
                            </Typography>
                        </Tooltip>
                    </Grid>)
        }
    </Grid>;
};