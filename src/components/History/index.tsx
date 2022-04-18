import {useRouter} from "next/router";
import {ErrorPage} from "../Error";
import {Button, CircularProgress, Grid, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import moment from "moment";
import * as React from "react";
import {useQuery} from "@apollo/client";
import {getVisionHistoryQueryVariable, visionHistoryQuery} from "../../gql/query/visionHistoryQuery";
import {Vision} from "../../../prisma/generated/type-graphql";
import {TimelineContainer} from "../Timeline";
import get from "lodash/get";

export const History = () => {
    const router = useRouter();
    const {premiseId} = router.query;
    const {data, loading, error} = useQuery(visionHistoryQuery, getVisionHistoryQueryVariable(premiseId as string));
    const visions: Vision[] = get(data, "visions", []);
    if (loading) return <CircularProgress/>;
    if (!premiseId || error) {
        return <ErrorPage>
            <div>{error?.message}</div>
        </ErrorPage>;
    }

    return (
            <>
                <TimelineContainer visions={visions}
                                   getDate={(vision) => vision.activityDate?.toISOString() || "no date"}
                                   getDescription={(vision) => vision.description || "no description"}
                                   getTitle={(vision) => vision.title}/>
                {visions.map(vision => <Grid key={vision.id} item container xs={12}>

                    <Button onClick={() => router.push(`/vision/${vision.id}`)}>
                        {vision.id}
                    </Button>
                    <Tooltip title={vision.updatedAt?.toDateString() || ""}>
                        <Typography>
                            {moment(vision.updatedAt).fromNow()}
                        </Typography>
                    </Tooltip>
                    <Tooltip title={get(vision, "mergeRequest.description", "")}>
                        <Typography
                                variant={"h6"}
                                key={vision.id}
                        >
                            {get(vision, "mergeRequest.title",)}
                        </Typography>
                    </Tooltip>
                </Grid>)}

            </>
    );
};