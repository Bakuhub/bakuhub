import {MergeRequest, Thread} from "../../../../prisma/generated/type-graphql";
import React, {useEffect} from "react";
import {Grid, Typography} from "@mui/material";
import {useMutation, useQuery} from "@apollo/client";
import {mergeVisionIntoPremiseMutation} from "../../../gql/mutation/mergeVisionIntoPremiseMutation";
import get from "lodash/get";
import {useSnackbar} from "notistack";
import {ConnectType} from "../../../types";
import {preprocessThreads} from "../../../utils/preprocess/threads";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {getThreadsQueryVariable} from "../../../gql/utils/getThreadsQueryVariable";
import dynamic from "next/dynamic";
import {createUpdateManySubscriptionsMutation} from "../../../gql/mutation/createUpdateManySubscriptionsMutation";
import {getUpdateManySubscriptionsVariables} from "../../../gql/utils/getUpdateManySubscriptionsVariables";

const ThreadContainer = dynamic(() => import("../../Thread/ThreadContainer"));
const LoadingButton = dynamic(() => import("@mui/lab/LoadingButton"));
const Comment = dynamic(() => import("../../Comment"));
const VisionOverview = dynamic(() => import("../VisionOverview"));


export interface CreateVisionProps {
    mergeRequest: MergeRequest;
}

export const VisionMergeRequest: React.FunctionComponent<CreateVisionProps> = ({mergeRequest}) => {
    const vision = get(mergeRequest, "vision");
    console.info("-----------------------");
    console.info(mergeRequest);
    const [loading, setLoading] = React.useState(false);
    const [mergeVisionIntoPremise] = useMutation(mergeVisionIntoPremiseMutation);
    const [updateManySubscriptions] = useMutation(createUpdateManySubscriptionsMutation(ConnectType.PREMISE));
    const {enqueueSnackbar} = useSnackbar();
    const {
        data: threadsQueryData,
        refetch: refetchThreads
    } = useQuery<{ threads: Thread[] }>(threadsQuery, getThreadsQueryVariable({
                                                                                  threadConnectType: ConnectType.MERGE_REQUEST,
                                                                                  id: mergeRequest.id
                                                                              }));
    const mainThreads = preprocessThreads(threadsQueryData?.threads || []);
    const connectConfig = {
        type: ConnectType.MERGE_REQUEST,
        id: mergeRequest.id
    };
    useEffect(() => {
        console.info("refetching threads");
        console.info(vision);
        console.info(get(vision, "premise.id",));
    }, [vision]);
    if (!vision) return <div>no vision</div>;
    return <Grid container>
        <Grid item container md={6} xs={12}>
            <Typography>
                Merge request: {vision.id}
            </Typography>
            <VisionOverview vision={vision}/>
        </Grid>
        {
                vision.prevVision && <Grid item container md={6} xs={12}>
                                      <Typography>
                                          this is the old version {vision.prevVision.id}
                                      </Typography>
                                      <VisionOverview vision={vision.prevVision}/>
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
                        const res = await updateManySubscriptions(getUpdateManySubscriptionsVariables(
                                                                          {
                                                                              type: ConnectType.PREMISE,
                                                                              id: get(vision, "premise.id", "")
                                                                          }
                                                                  )
                        );
                        console.info(res);
                        console.info("-------------");
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

        <Comment
                connectConfig={connectConfig}
                handleSubmitCallback={refetchThreads}
        />
        <ThreadContainer connectConfig={connectConfig} threads={mainThreads}/>
    </Grid>;
};