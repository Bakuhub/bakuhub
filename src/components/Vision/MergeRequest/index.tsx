import {MergeRequest, Thread} from "../../../../prisma/generated/type-graphql/";
import React from "react";
import {Grid, LinearProgress, Typography} from "@mui/material";
import {VisionDetail} from "../VisionOverview/VisionDetail";
import {useMutation, useQuery} from "@apollo/client";
import {mergeVisionIntoPremiseMutation} from "../../../gql/mutation/mergeVisionIntoPremiseMutation";
import {get} from "lodash";
import {useSnackbar} from "notistack";
import {LoadingButton} from "@mui/lab";
import {Comment} from "../../Comment";
import {ConnectType} from "../../../types";
import {preprocessThreads} from "../../../utils/preprocess/threads";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {getThreadsQueryVariable} from "../../../gql/utils/getThreadsQueryVariable";
import {ThreadDetail} from "../../Thread/ThreadDetail";

export interface CreateVisionProps {
    mergeRequest: MergeRequest;
}

export const VisionMergeRequest: React.FunctionComponent<CreateVisionProps> = ({mergeRequest}) => {
    const vision = get(mergeRequest, "vision");
    const [loading, setLoading] = React.useState(false);
    const [mergeVisionIntoPremise] = useMutation(mergeVisionIntoPremiseMutation);
    const {enqueueSnackbar} = useSnackbar();
    const {
        data: threadsQueryData,
        refetch: refetchThreads
    } = useQuery<{ threads: Thread[] }>(threadsQuery, getThreadsQueryVariable({
        threadConnectType: ConnectType.MERGE_REQUEST,
        id: mergeRequest.id
    }));
    const mainThreads = preprocessThreads(threadsQueryData?.threads || []);

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
        </Grid>

        <Comment connectConfig={
            {
                type: ConnectType.MERGE_REQUEST,
                id: mergeRequest.id
            }
        }
                 handleSubmitCallback={refetchThreads}
        />
        <Grid item container xs={12}>
            {
                mainThreads ? mainThreads.map((thread, index) =>
                                <ThreadDetail
                                        key={thread.id ? thread.id:index}
                                        thread={thread}
                                        connectConfig={
                                            {
                                                type: ConnectType.MERGE_REQUEST,
                                                id: mergeRequest.id
                                            }
                                        }
                                />):
                        <LinearProgress/>
            }
        </Grid>
    </Grid>;
};