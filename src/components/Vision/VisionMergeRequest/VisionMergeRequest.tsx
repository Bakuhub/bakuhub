import {MergeRequest, Thread} from "prisma/generated/type-graphql";
import React from "react";
import {Grid, Typography} from "@mui/material";
import {useMutation, useQuery} from "@apollo/client";
import {mergeVisionIntoPremiseMutation} from "@gql/mutation/mergeVisionIntoPremiseMutation";
import get from "lodash/get";
import {useSnackbar} from "notistack";
import {ConnectType} from "../../../types";
import {preprocessThreads} from "../../../utils/preprocess/threads";
import {threadsQuery} from "@gql/query/threadsQuery";
import {getThreadsQueryVariable} from "@gql/utils/getThreadsQueryVariable";
import dynamic from "next/dynamic";
import {
    createUpdateManySubscriptionsMutation
} from "@gql/mutation/createUpdateManySubscriptionsMutation";
import {getUpdateManySubscriptionsVariables} from "@gql/utils/getUpdateManySubscriptionsVariables";
import {activeVisionIdByPremiseQuery} from "@gql/query/activeVisionIdByPremiseQuery";
import {getActiveVisionByPremiseIdVariables} from "@gql/utils/getActiveVisionByPremiseIdVariables";
import {getCreateOrConnectLabelVariables} from "@gql/utils/getCreateOrConnectLabelVariables";

const ThreadContainer = dynamic(() => import("../../Thread/ThreadContainer"));
const LoadingButton = dynamic(() => import("@mui/lab/LoadingButton"));
const Comment = dynamic(() => import("../../Comment"));
const VisionOverview = dynamic(() => import("../VisionOverview"));


export interface CreateVisionProps {
    mergeRequest: MergeRequest;
}

export const VisionMergeRequest: React.FunctionComponent<CreateVisionProps> = ({mergeRequest}) => {
    const vision = get(mergeRequest, "vision");
    console.info("mergeRequest", mergeRequest);
    const [loading, setLoading] = React.useState(false);
    const [mergeVisionIntoPremise] = useMutation(mergeVisionIntoPremiseMutation);
    const [updateManySubscriptions] = useMutation(createUpdateManySubscriptionsMutation(ConnectType.PREMISE));
    const {enqueueSnackbar} = useSnackbar();
    const {data: premiseData, refetch: getActiveVisionId} = useQuery(
            activeVisionIdByPremiseQuery,
            getActiveVisionByPremiseIdVariables(mergeRequest.vision?.premise?.id || "")
    );
    const activeVisionId = get(premiseData, "premise.vision[0].id", "");
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
    if (!vision) return <div>no vision</div>;
    return <Grid container>
        <Grid item xs={12}>
            <Typography>
                {mergeRequest.title}
            </Typography>
            <Typography>
                {mergeRequest.description}
            </Typography>


        </Grid>
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
        <Grid item container xs={12}>
            <LoadingButton loading={loading}
                           onClick={async () => {
                               setLoading(true);
                               if (activeVisionId !== mergeRequest.vision?.prevVision?.id) {
                                   enqueueSnackbar(
                                           "the version does not match, please confirm the change again",
                                           {
                                               variant: "error"
                                           }
                                   );
                               } else {
                                   try {
                                       const result = await mergeVisionIntoPremise(
                                               {
                                                   variables: {
                                                       "where": {
                                                           "id": vision.id
                                                       },
                                                       "data": {
                                                           "draftMode": {
                                                               "set": false
                                                           },

                                                           labelsOnMergeRequest: {
                                                               create:
                                                                       mergeRequest.labelsOnMergeRequest?.map(
                                                                               ({label}) => label
                                                                                            ? getCreateOrConnectLabelVariables(
                                                                                               {
                                                                                                   name: label.name,
                                                                                                   color: label.color,
                                                                                                   description: label.description ||
                                                                                                                undefined
                                                                                               })
                                                                                            :null)
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
                                           enqueueSnackbar(
                                                   "Merge request has been successfully merged",
                                                   {variant: "success"}
                                           );
                                           const res = await updateManySubscriptions(
                                                   getUpdateManySubscriptionsVariables(
                                                           {
                                                               type: ConnectType.PREMISE,
                                                               id: get(vision, "premise.id", "")
                                                           }
                                                   )
                                           );
                                       }
                                       if (result.errors) {
                                           enqueueSnackbar(
                                                   result.errors[0].message,
                                                   {variant: "error"}
                                           );
                                       }
                                   } catch (e) {
                                       enqueueSnackbar(get(e, "message", ""), {variant: "error"});
                                   }
                               }
                               setLoading(false);
                           }}
            >
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