import * as React from "react";
import {Premise, Thread} from "../../../../prisma/generated/type-graphql";
import {useMutation, useQuery} from "@apollo/client";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {Button, CircularProgress, Grid, Tooltip, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {getThumbnail} from "../../../utils/getThumbnail";
import get from "lodash/get";
import {ReferenceOverview} from "../../Reference/ReferenceOverview";
import {getThreadsQueryVariable} from "../../../gql/utils/getThreadsQueryVariable";
import {ConnectType} from "../../../types";
import {preprocessThreads} from "../../../utils/preprocess/threads";
import {premiseQuery} from "../../../gql/query/premiseQuery";
import {getPremiseDetailQueryVariable} from "../../../gql/utils/getPremiseDetailQueryVariable";
import {getVisionHistoryQueryVariable} from "../../../gql/query/visionHistoryQuery";
import {upsertReactionOnVisionsMutation} from "../../../gql/mutation/createReactionOnVisionMutation";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import {visionHistoryCountQuery} from "../../../gql/query/visionHistoryCountQuery";
import dynamic from "next/dynamic";
import VotingButton from "../../Voting";
import {createVoteOnVisionMutation} from "../../../gql/mutation/createVoteOnVisionMutation";
import {useSession} from "next-auth/react";

const ThreadContainer = dynamic(() => import("../../Thread/ThreadContainer"));
const Comment = dynamic(() => import("../../Comment"));
const Image = dynamic(() => import("next/image"));
const LoadingButton = dynamic(() => import("@mui/lab/LoadingButton"));
const ReactionButtons = dynamic(() => import("../../Reaction"));

export enum Reaction {
    UPVOTE = "UPVOTE",
    DOWNVOTE = "DOWNVOTE"
}

interface PremiseDetailProps {
    premise: Premise;
}

export const PremiseDetailContainer = () => {
    const router = useRouter();
    const premiseId = router.query.id;
    const {data, loading, error} = useQuery(premiseQuery, getPremiseDetailQueryVariable(premiseId as string));
    if (loading && !data) {
        return <CircularProgress/>;
    } else {
        if (error) {
            return <Typography>{error.message}</Typography>;
        }
        return <PremiseDetail premise={data.premise}/>;
    }
};
export const PremiseDetail: React.FunctionComponent<PremiseDetailProps> = ({premise}) => {
    const [isRedirecting, setIsRedirecting] = React.useState(false);
    const router = useRouter();
    const session = useSession();
    console.log(session);
    const [createVote] = useMutation(createVoteOnVisionMutation);
    const activeVision = premise.vision?.find(vision =>
                                                      vision.nextVisions?.every(nextVision => !!nextVision.draftMode)
                                                      && !vision.draftMode);

    const {
        data: threadsQueryData,
        refetch: refetchThreads,
    } = useQuery<{ threads: Thread[] }>(threadsQuery, getThreadsQueryVariable({
                                                                                  threadConnectType: ConnectType.VISION,
                                                                                  id: activeVision?.id || ""
                                                                              }));
    const [createReactionOnVision] = useMutation(upsertReactionOnVisionsMutation, {
        errorPolicy: "all",
    });

    const {
        data: visionHistoryData,
        loading: visionHistoryLoading,
        error: visionHistoryError
    } = useQuery(visionHistoryCountQuery, getVisionHistoryQueryVariable(premise.id));


    const visionHistoryCount: number = get(visionHistoryData, "visions.length", 1);
    const mainThreads = preprocessThreads(threadsQueryData?.threads || []);
    const allOtherVisions = premise.vision?.filter(vision => vision.id !== activeVision?.id
                                                             && get(vision, "mergeRequest.status") === "OPEN");
    const thumbnail = getThumbnail(activeVision);

    const connectConfig = {
        type: ConnectType.VISION,
        id: activeVision?.id || ""
    };
    return (
            <Grid container>
                <Grid item container xs={12}>
                    <Grid item xs={4}>
                        <Grid item>
                            <Tooltip title={"view log"}>
                                <Button variant={"outlined"}
                                        onClick={() => router.push(`/history/premise/${premise.id}`)}>
                                    visions: {visionHistoryCount}</Button>
                            </Tooltip>
                        </Grid>
                        <Image
                                height="400"
                                width="400"
                                src={thumbnail}
                                alt="Paella dish"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3" color="text.secondary">
                            {activeVision?.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {activeVision?.description}
                        </Typography>
                    </Grid>
                    <Grid item container xs={2} alignContent={"flex-start"}>
                        <Grid item xs={12}>
                            <Typography variant={"h5"}>Merge requests opened:</Typography>
                        </Grid>
                        {
                            allOtherVisions?.map(vision =>
                                                         <Grid key={vision.id} item container xs={12}>
                                                             <Tooltip title={get(
                                                                     vision,
                                                                     "mergeRequest.description",
                                                                     ""
                                                             )}>
                                                                 <Typography
                                                                         variant={"h6"}
                                                                         key={vision.id}
                                                                         onClick={() => router.push(`/review/mergeRequest/${get(
                                                                                 vision,
                                                                                 "mergeRequest.id",
                                                                                 false
                                                                         )}`)}
                                                                 >
                                                                     {get(vision, "mergeRequest.title", "")}
                                                                 </Typography>
                                                             </Tooltip>
                                                         </Grid>)
                        }
                    </Grid>
                    <ReferenceOverview snapshots={
                        get(activeVision, "reference.snapshots", [])}/>
                    <ReactionButtons id={activeVision?.id} type={ConnectType.VISION}
                                     createReaction={createReactionOnVision}/>
                    <LoadingButton variant={"outlined"} loading={isRedirecting} onClick={() => {
                        setIsRedirecting(true);
                        router.push(`/create/vision/${premise.id}`);
                    }} aria-label="share" startIcon={<AccountTreeTwoToneIcon/>
                    }>
                        Create new vision
                    </LoadingButton>
                    <VotingButton createVote={createVote} type={ConnectType.VISION} id={activeVision?.id}/>
                </Grid>

                <Comment
                        connectConfig={connectConfig}
                        handleSubmitCallback={refetchThreads}
                />
                <ThreadContainer connectConfig={connectConfig} threads={mainThreads}/>
            </Grid>
    );

};