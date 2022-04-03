import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {Premise, Thread} from "../../../../prisma/generated/type-graphql";
import {useMutation, useQuery} from "@apollo/client";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {ThreadDetail} from "../../Thread/ThreadDetail";
import ReplyIcon from "@mui/icons-material/Reply";
import {Button, CircularProgress, Grid, LinearProgress, Tooltip} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";
import {getThumbnail} from "../../../utils/getThumbnail";
import {get} from "lodash";
import {ReferenceOverview} from "../../Reference/ReferenceOverview";
import {getThreadsQueryVariable} from "../../../gql/utils/getThreadsQueryVariable";
import {ConnectType} from "../../../types";
import {Comment} from "../../Comment";
import {preprocessThreads} from "../../../utils/preprocess/threads";
import {premiseQuery} from "../../../gql/query/premiseQuery";
import {getPremiseDetailQueryVariable} from "../../../gql/utils/getPremiseDetailQueryVariable";
import {getVisionHistoryQueryVariable} from "../../../gql/query/visionHistoryQuery";
import {getCreateReactionVariables, Reaction} from "../../../gql/utils/getCreateReactionVariables";
import {createReactionOnVisionMutation} from "../../../gql/mutation/createReactionOnVisionMutation";
import {getUserIdBySession} from "../../../utils/getUserIdBySession";
import {useSession} from "next-auth/react";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import {LoadingButton} from "@mui/lab";
import {visionHistoryCountQuery} from "../../../gql/query/visionHistoryCountQuery";

interface PremiseDetailProps {
    premise: Premise;
}

export const PremiseDetailContainer = () => {
    const router = useRouter();
    const premiseId = router.query.id;
    const {data, loading, error} = useQuery(premiseQuery, getPremiseDetailQueryVariable(premiseId as string));
    console.info(data);
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
    const session = useSession();
    const router = useRouter();
    const activeVision = premise.vision?.find(vision =>
            vision.nextVisions?.every(nextVision => !!nextVision.draftMode)
            && !vision.draftMode);
    const {
        data: threadsQueryData,
        refetch: refetchThreads
    } = useQuery<{ threads: Thread[] }>(threadsQuery, getThreadsQueryVariable({
        threadConnectType: ConnectType.VISION,
        id: activeVision?.id || ""
    }));
    const [isRedirecting, setIsRedirecting] = React.useState(false);
    const [createReactionOnVision,] = useMutation(createReactionOnVisionMutation);

    const {
        data: visionHistoryData,
        loading: visionHistoryLoading,
        error: visionHistoryError
    } = useQuery(visionHistoryCountQuery, getVisionHistoryQueryVariable(premise.id));
    const visionHistoryCount: number = get(visionHistoryData, "visions.length", 1);
    const mainThreads = preprocessThreads(threadsQueryData?.threads || []);
    const allOtherVisions = premise.vision?.filter(vision => vision.id!==activeVision?.id
            && get(vision, "mergeRequest.status")==="OPEN");
    const thumbnail = getThumbnail(activeVision);
    const onClick = async () => {
        if (activeVision?.id) {
            const result = await createReactionOnVision(getCreateReactionVariables({
                id: activeVision.id,
                reaction: Reaction.UPVOTE,
                type: ConnectType.VISION,
                userId: getUserIdBySession(session)
            }));
            console.info(result);
        }
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
                    <Grid item xs={4}>
                        <Typography variant="h3" color="text.secondary">
                            {activeVision?.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {activeVision?.description}
                        </Typography>
                    </Grid>
                    <Grid item container xs={4} alignContent={"flex-start"}>
                        <Grid item xs={12}>
                            <Typography variant={"h5"}>Merge requests opened:</Typography>
                        </Grid>
                        {
                            allOtherVisions?.map(vision =>
                                    <Grid key={vision.id} item container xs={12}>
                                        <Tooltip title={get(vision, "mergeRequest.description", "")}>
                                            <Typography
                                                    variant={"h6"}
                                                    key={vision.id}
                                                    onClick={() => router.push(`/review/mergeRequest/${get(vision, "mergeRequest.id", false)}`)}
                                            >
                                                {get(vision, "mergeRequest.title", "")}
                                            </Typography>
                                        </Tooltip>
                                    </Grid>)
                        }
                    </Grid>
                    <ReferenceOverview snapshots={
                        get(activeVision, "reference.snapshots", [])}/>
                    <IconButton aria-label="add to favorites"
                                color={"primary"}
                                onClick={onClick}>
                        <ReplyIcon/>
                    </IconButton>
                    <LoadingButton variant={"outlined"} loading={isRedirecting} onClick={() => {
                        setIsRedirecting(true);
                        router.push(`/create/vision/${premise.id}`);
                    }} aria-label="share" startIcon={<AccountTreeTwoToneIcon/>
                    }>
                        Create new vision
                    </LoadingButton>
                </Grid>

                <Comment connectConfig={
                    {
                        type: ConnectType.VISION,
                        id: activeVision?.id || ""
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
                                                        type: ConnectType.VISION,
                                                        id: activeVision?.id || ""
                                                    }
                                                }
                                        />):
                                <LinearProgress/>
                    }
                </Grid>
            </Grid>
    );

};