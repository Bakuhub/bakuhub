import * as React from "react";
import {useEffect} from "react";
import {Thread, Vision} from "../../../../prisma/generated/type-graphql";
import {useMutation, useQuery} from "@apollo/client";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {Button, Grid, Icon, Tooltip, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {getThumbnail} from "../../../utils/getThumbnail";
import get from "lodash/get";
import {ReferenceOverview} from "../../Reference/ReferenceOverview";
import {getThreadsQueryVariable} from "../../../gql/utils/getThreadsQueryVariable";
import {ConnectType} from "../../../types";
import {preprocessThreads} from "../../../utils/preprocess/threads";
import {getVisionHistoryQueryVariable} from "../../../gql/query/visionHistoryQuery";
import {visionHistoryCountQuery} from "../../../gql/query/visionHistoryCountQuery";
import dynamic from "next/dynamic";
import {useSession} from "next-auth/react";
import {getUpsertSubscriptionVariables} from "../../../gql/utils/getUpsertSubscriptionVariables";
import {getUserIdBySession} from "../../../utils/getUserIdBySession";
import {getUpsertSubscriptionMutation} from "../../../gql/mutation/getUpsertSubscriptionMutation";
import Image from "next/image";
import ThreadContainer from "../../Thread/ThreadContainer";
import TagChip from "../../Tag/TagChip";
import {MaterialUIIcons} from "../../../constants/MaterialUIIcons";
import {
    getVisionWithMergeRequestByPremiseIdVariables
} from "../../../gql/utils/getVisionWithMergeRequestByPremiseIdVariables";
import {visionWithMergeRequestQuery} from "../../../gql/query/visionWithMergeRequestQuery";
import Link from "next/link";
import {createVisionViewsHistoryMutation} from "src/gql/mutation/createVisionViewsHistoryMutation";
import {getCreateVisionViewsHistoryVariable} from "@gql/utils/getCreateVisionViewsHistoryVariable";

const VotingButton = dynamic(() => import("src/components/Voting"), {ssr: false});
const Comment = dynamic(() => import("../../Comment"));
const LoadingButton = dynamic(() => import("@mui/lab/LoadingButton"));

export enum Reaction {
    UPVOTE = "UPVOTE",
    DOWNVOTE = "DOWNVOTE"
}

interface PremiseDetailProps {
    activeVision: Vision;
}

export const PremiseDetail: React.FunctionComponent<PremiseDetailProps> = ({activeVision}) => {
    const [isRedirecting, setIsRedirecting] = React.useState(false);
    const router = useRouter();
    const session = useSession();
    const userId = getUserIdBySession(session);
    const premiseId = activeVision.premiseId;
    const [createSubscriptionMutation] = useMutation(getUpsertSubscriptionMutation(ConnectType.PREMISE));
    const [createVisionViewsHistory, {called: isHistoryCreated}] = useMutation(createVisionViewsHistoryMutation);
    const {
        data: threadsQueryData,
        refetch: refetchThreads,
    } = useQuery<{ threads: Thread[] }>(threadsQuery, getThreadsQueryVariable({
                                                                                  threadConnectType: ConnectType.VISION,
                                                                                  id: activeVision?.id || ""
                                                                              }));
    const {
        data: visionHistoryData,
    } = useQuery(visionHistoryCountQuery, getVisionHistoryQueryVariable(premiseId));


    const visionHistoryCount: number = get(visionHistoryData, "visions.length", 1);
    const mainThreads = preprocessThreads(threadsQueryData?.threads || []);
    const {data: visionWithMergeRequestData} = useQuery<{ visions: Vision[] }>(
            visionWithMergeRequestQuery,
            getVisionWithMergeRequestByPremiseIdVariables(premiseId)
    );
    const visionsWithMergeRequest = get(visionWithMergeRequestData, "visions", []);
    const thumbnail = getThumbnail(activeVision);

    const connectConfig = {
        type: ConnectType.VISION,
        id: activeVision?.id || ""
    };
    useEffect(() => {
        console.info("userId", userId);
        if (userId && premiseId) {

            createSubscriptionMutation(getUpsertSubscriptionVariables(
                    {
                        type: ConnectType.PREMISE,
                        id: premiseId,
                        userId,
                    })).then((res) => {
                console.info("subscription created", res);
            }).catch(err => {
                console.error(err);
            });
        }
    }, [createSubscriptionMutation, premiseId, userId]);
    useEffect(
            () => {
                if (activeVision?.id && userId && !isHistoryCreated) {
                    console.info("createVisionViewsHistory", activeVision?.id, userId);
                    createVisionViewsHistory(getCreateVisionViewsHistoryVariable(activeVision.id, userId)).then(
                            res => {
                                console.info("createVisionViewsHistory", res);
                            }
                    ).catch(
                            err => {
                                console.error(err);
                            }
                    );
                }
            },
            [activeVision?.id, createVisionViewsHistory, isHistoryCreated, userId]
    );
    return (
            <Grid container>
                <Grid item container xs={12}>
                    <Grid item xs={4}>
                        <Grid item container spacing={1}>
                            {
                                activeVision.tagsOnVisions?.map(
                                        (tagsOnVision) => {
                                            const label = get(tagsOnVision, "tag.label", "");
                                            return <Grid
                                                    key={label}
                                                    item><TagChip tagLabel={label}/>
                                            </Grid>;
                                        }
                                )
                            }
                        </Grid>
                        <Grid item>
                            <Tooltip title={"view log"}>
                                <Link href={`/history/premise/${premiseId}`} passHref>
                                    <Button variant={"outlined"}
                                    >
                                        visions: {visionHistoryCount}
                                    </Button>
                                </Link>
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
                            <Link href={`/vision/${activeVision.id}/mergeRequests`} passHref>
                                <Button variant={"outlined"}>
                                    merge requests: {visionsWithMergeRequest.length}
                                </Button>
                            </Link>
                            <Typography

                                    variant={"h5"}>Merge requests opened:</Typography>
                        </Grid>
                        {
                            visionsWithMergeRequest.map(vision =>
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
                    <VotingButton type={ConnectType.VISION} id={activeVision?.id}/>

                    {/*<ReactionButtons id={activeVision?.id} type={ConnectType.VISION}*/}
                    {/*                 createReaction={createReactionOnVision}/>*/}
                    <LoadingButton variant={"outlined"} loading={isRedirecting} onClick={() => {
                        setIsRedirecting(true);
                        router.push(`/create/vision/${activeVision?.id}`);
                    }} aria-label="share" startIcon={
                        <Icon>
                            {MaterialUIIcons.account_tree_two_tone}
                        </Icon>
                    }>
                        Create new vision
                    </LoadingButton>
                </Grid>

                <Comment
                        connectConfig={connectConfig}
                        handleSubmitCallback={refetchThreads}
                />
                <ThreadContainer connectConfig={connectConfig} threads={mainThreads}/>
            </Grid>
    );

};