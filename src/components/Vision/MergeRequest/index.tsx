import {MergeRequest} from "../../../../prisma/generated/type-graphql/";
import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import {VisionDetail} from "../Detail/VisionDetail";
import {useMutation} from "@apollo/client";
import {mergeVisionIntoPremiseMutation} from "../../../gql/mutation/mergeVisionIntoPremiseMutation";
import {get} from "lodash";
import {useSnackbar} from "notistack";
import {LoadingButton} from "@mui/lab";

export interface CreateVisionProps {
    mergeRequest: MergeRequest;
}

export const VisionMergeRequest: React.FunctionComponent<CreateVisionProps> = ({mergeRequest}) => {
    const vision = get(mergeRequest, "vision");
    const [loading, setLoading] = React.useState(false);
    const [mergeVisionIntoPremise] = useMutation(mergeVisionIntoPremiseMutation);
    const {enqueueSnackbar} = useSnackbar();
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
            <LoadingButton loading={loading} onClick={async () => {
                setLoading(true);
                try {
                    const result = await mergeVisionIntoPremise({
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
                    });
                    if (result.data) {
                        enqueueSnackbar("Merge request has been successfully merged", {variant: "success"});
                    }
                    if (result.errors) {
                        enqueueSnackbar(result.errors[0].message, {variant: "error"});
                    }
                } catch (e) {
                    enqueueSnackbar(get(e, "message", ""), {variant: "error"});
                }
                setLoading(false);
            }}>
                merge
            </LoadingButton>
            <Button onClick={() => mergeVisionIntoPremise({
                variables: {
                    "where": {
                        "id": vision.id
                    },
                    "data": {
                        "draftMode": {
                            "set": true
                        },
                        "mergeRequest": {
                            "update": {
                                "status": {
                                    "set": "CLOSE"
                                }
                            }
                        }
                    }
                }
            })}>

            </Button>
        </Grid>
    </Grid>;
};