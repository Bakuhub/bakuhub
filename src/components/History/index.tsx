import {Button, Grid, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import moment from "moment";
import * as React from "react";
import {FunctionComponent} from "react";
import {Vision} from "../../../prisma/generated/type-graphql";
import {TimelineContainer} from "../Timeline";
import get from "lodash/get";
import {useRouter} from "next/router";

export const History: FunctionComponent<{ visions: Vision[] }> = ({visions}) => {
    const router = useRouter();
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
                    <Tooltip title={new Date(get(vision, "updatedAt")).toDateString() || ""}>
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