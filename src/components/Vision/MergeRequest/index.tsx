import {MergeRequest} from "../../../../prisma/generated/type-graphql";
import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import {VisionDetail} from "../Detail/VisionDetail";
import {useMutation} from "@apollo/client";
import {mergeVisionIntoPremiseMutation} from "../../../gql/mutation/mergeVisionIntoPremiseMutation";
import {get} from "lodash";

export interface CreateVisionProps {
    mergeRequest: MergeRequest;
}

export const VisionMergeRequest: React.FunctionComponent<CreateVisionProps> = ({mergeRequest}) => {
    const vision = get(mergeRequest, "vision");
    console.info(mergeRequest);
    const [mergeVisionIntoPremise] = useMutation(mergeVisionIntoPremiseMutation);
    if (!vision) return <div>no vision</div>;
    return <Grid container>
        <Grid item container md={6} xs={12}>
            <Typography>
                Merge request: {vision.id}
            </Typography>
            <VisionDetail vision={vision}/>
        </Grid>
        {
            vision.prevVision && <Grid item container md={6} xs={12}>
                <Typography>
                    this is the old version {vision.prevVision.id}
                </Typography>
                <VisionDetail vision={vision.prevVision}/>
            </Grid>}

        <Grid item xs={12}>
            <Button onClick={() => mergeVisionIntoPremise({
                variables: {
                    "where": {
                        "id": vision.id
                    },
                    "data": {
                        "draftMode": {
                            "set": false
                        },
                        "mergeRequest": {
                            "update": {
                                "status": {
                                    "set": "MERGED"
                                }
                            }
                        }
                    }
                }
            })}>
                merge
            </Button>
        </Grid>
    </Grid>;
};