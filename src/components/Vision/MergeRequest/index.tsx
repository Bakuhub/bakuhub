import {Vision} from "../../../../prisma/generated/type-graphql";
import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import {VisionDetail} from "../Detail/VisionDetail";
import {useMutation} from "@apollo/client";
import {mergeVisionIntoPremiseMutation} from "../../../gql/mutation/mergeVisionIntoPremiseMutation";

export interface CreateVisionProps {
    vision: Vision;
}

export const VisionMergeRequest: React.FunctionComponent<CreateVisionProps> = ({vision}) => {

    console.info(vision);
    const [mergeVisionIntoPremise] = useMutation(mergeVisionIntoPremiseMutation);
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
                    "data": {
                        "draftMode": {
                            "set": false
                        }
                    },
                    "where": {
                        "id": vision.id
                    }
                }
            })}>
                merge
            </Button>
        </Grid>
    </Grid>;
};