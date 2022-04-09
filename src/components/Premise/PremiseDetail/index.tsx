import * as React from "react";
import {useEffect} from "react";
import Typography from "@mui/material/Typography";
import {Premise, Thread} from "../../../../prisma/generated/type-graphql";
import {useMutation, useQuery} from "@apollo/client";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {Button, CircularProgress, Grid, Tooltip} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";
import {getThumbnail} from "../../../utils/getThumbnail";
import {find, get} from "lodash";
import {ReferenceOverview} from "../../Reference/ReferenceOverview";
import {getThreadsQueryVariable} from "../../../gql/utils/getThreadsQueryVariable";
import {ConnectType} from "../../../types";
import {Comment} from "../../Comment";
import {preprocessThreads} from "../../../utils/preprocess/threads";
import {premiseQuery} from "../../../gql/query/premiseQuery";
import {getPremiseDetailQueryVariable} from "../../../gql/utils/getPremiseDetailQueryVariable";
import {getVisionHistoryQueryVariable} from "../../../gql/query/visionHistoryQuery";
import {upsertReactionOnVisionsMutation} from "../../../gql/mutation/createReactionOnVisionMutation";
import {getUserIdBySession} from "../../../utils/getUserIdBySession";
import {useSession} from "next-auth/react";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import {LoadingButton} from "@mui/lab";
import {visionHistoryCountQuery} from "../../../gql/query/visionHistoryCountQuery";
import {ThreadContainer} from "../../Thread/ThreadContainer";
import {ThumbDownAlt, ThumbUpAlt} from "@mui/icons-material";
import {useSnackbar} from "notistack";
import {getReactionByVisionsIdArgs} from "../../../gql/helper/getReactionByVisionsIdArgs";
import {addReaction} from "../../../services/api/addReaction";

export enum Reaction {
    LIKE = "LIKE",
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
    const session = useSession();
    const [isRedirecting, setIsRedirecting] = React.useState(false);
    const router = useRouter();
    const {enqueueSnackbar} = useSnackbar();
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
    const [createReactionOnVision] = useMutation(upsertReactionOnVisionsMutation, {
        errorPolicy: "all",
    });

    const {
        data: visionHistoryData,
        loading: visionHistoryLoading,
        error: visionHistoryError
    } = useQuery(visionHistoryCountQuery, getVisionHistoryQueryVariable(premise.id));

    const {
        data: reactionData,
        error: reactionError,
        refetch: refetchReaction
    } = useQuery(...getReactionByVisionsIdArgs(activeVision ? [activeVision.id]:[]));
    const getReactionCount = (reaction: string) => {
        if (reactionData) {
            const selectedReactionData = get(reactionData, reaction, []);
            const selectedReactionDataByVisionId = find(selectedReactionData, (reaction: { visionId: string }) => reaction.visionId===activeVision?.id);
            if (selectedReactionDataByVisionId) return selectedReactionDataByVisionId._count._all;
        }
        return 0;
    };
    useEffect(() => {
        if (reactionError)
            reactionError?.message && enqueueSnackbar(reactionError.message, {
                variant: "error"
            });
    }, [reactionError]);
    const visionHistoryCount: number = get(visionHistoryData, "visions.length", 1);
    const mainThreads = preprocessThreads(threadsQueryData?.threads || []);
    const allOtherVisions = premise.vision?.filter(vision => vision.id!==activeVision?.id
            && get(vision, "mergeRequest.status")==="OPEN");
    const thumbnail = getThumbnail(activeVision);
    const handleReaction = async (reaction: Reaction) => {
        const userId = getUserIdBySession(session);
        if (!userId) {
            enqueueSnackbar("You need to login to perform this action", {variant: "error"});
            return;
        }
        const id = activeVision?.id;
        if (!id) {
            enqueueSnackbar("No vision is selected", {variant: "error"});
            return;
        }
        await addReaction({
            id,
            type: ConnectType.VISION,
            reaction,
            createReaction: createReactionOnVision,
            userId: userId, enqueueSnackbar,
        });
        refetchReaction();
    };

    const connectConfig = {
        type: ConnectType.VISION,
        id: activeVision?.id || ""
    };
    const data = {
        "web": {
            "client_id": "1041940344100-6kgadot2bpsikap3o602gvor82f4cq2e.apps.googleusercontent.com",
            "project_id": "bakuhub",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_secret": "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",
            "javascript_origins": ["https://www.bakuhub.com"]
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
                    <LoadingButton startIcon={<ThumbUpAlt/>} variant={"outlined"}
                                   onClick={() => handleReaction(Reaction.UPVOTE)}>
                        {getReactionCount("upVotes")}
                    </LoadingButton>
                    <LoadingButton startIcon={<ThumbDownAlt/>} variant={"outlined"}
                                   onClick={() => handleReaction(Reaction.DOWNVOTE)}>
                        {getReactionCount("downVotes")}
                    </LoadingButton>
                    <LoadingButton variant={"outlined"} loading={isRedirecting} onClick={() => {
                        setIsRedirecting(true);
                        router.push(`/create/vision/${premise.id}`);
                    }} aria-label="share" startIcon={<AccountTreeTwoToneIcon/>
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