import {Button, Grid, Icon, LinearProgress, Tooltip} from "@mui/material";
import get from "lodash/get";
import {ReferenceOverview} from "../Reference/ReferenceOverview";
import IconButton from "@mui/material/IconButton";
import {LoadingButton} from "@mui/lab";
import {Comment} from "../Comment";
import {ConnectType} from "../../types";
import {ThreadDetail} from "../Thread/ThreadDetail";
import * as React from "react";
import {FunctionComponent, useEffect} from "react";
import {useRouter} from "next/router";
import {Thread, Vision} from "../../../prisma/generated/type-graphql";
import {useMutation, useQuery} from "@apollo/client";
import {threadsQuery} from "../../gql/query/threadsQuery";
import {getThreadsQueryVariable} from "../../gql/utils/getThreadsQueryVariable";
import {visionHistoryCountQuery} from "../../gql/query/visionHistoryCountQuery";
import {getVisionHistoryQueryVariable} from "../../gql/query/visionHistoryQuery";
import {getThumbnail} from "../../utils/getThumbnail";
import {getCreateReactionVariables} from "../../gql/utils/getCreateReactionVariables";
import {getUserIdBySession} from "../../utils/getUserIdBySession";
import {useSession} from "next-auth/react";
import {preprocessThreads} from "../../utils/preprocess/threads";
import {addReaction} from "../../services/api/addReaction";
import {upsertReactionOnVisionsMutation} from "../../gql/mutation/createReactionOnVisionMutation";
import {useSnackbar} from "notistack";
import {MaterialUIIcons} from "../../constants/MaterialUIIcons";
import {Reaction} from "../Premise/PremiseDetail";
import dynamic from "next/dynamic";
import Image from "next/image";

const Typography = dynamic(() => import( "@mui/material/Typography"));


export interface DetailPageProps {
    vision: Vision;
}

export const DetailPage: FunctionComponent<DetailPageProps> = ({vision}) => {
    const router = useRouter();
    const session = useSession();
    const {enqueueSnackbar} = useSnackbar();
    const [isRedirecting, setIsRedirecting] = React.useState(false);
    const {
        data: threadsQueryData,
        refetch: refetchThreads
    } = useQuery<{ threads: Thread[] }>(threadsQuery, getThreadsQueryVariable({
                                                                                  threadConnectType: ConnectType.VISION,
                                                                                  id: vision?.id || ""
                                                                              }));
    const mainThreads = preprocessThreads(threadsQueryData?.threads || []);

    const {
        data: visionHistoryData,
        loading: visionHistoryLoading,
        error: visionHistoryError
    } = useQuery(visionHistoryCountQuery, getVisionHistoryQueryVariable(vision.premiseId));
    const visionHistoryCount: number = get(visionHistoryData, "visions.length", 1);
    const [createReactionOnVision] = useMutation(upsertReactionOnVisionsMutation, {
        errorPolicy: "all",
    });
    const thumbnail = getThumbnail(vision);

    const onClick = async () => {
        if (vision?.id) {
            const result = await createReactionOnVision(getCreateReactionVariables({
                                                                                       id: vision.id,
                                                                                       reaction: Reaction.UPVOTE,
                                                                                       type: ConnectType.VISION,
                                                                                       userId: getUserIdBySession(
                                                                                               session)
                                                                                   }));
        }
    };
    useEffect(() => {
        console.info("DetailPage: useEffect");

    }, []);
    return (
            <Grid container>
                <Grid item container xs={12}>
                    <Grid item xs={4}>
                        <Grid item>
                            <Tooltip title={"view log"}>
                                <Button variant={"outlined"}
                                        onClick={() => router.push(`/history/premise/${vision.premiseId}`)}>
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
                            {vision?.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {vision?.description}
                        </Typography>
                    </Grid>

                    <ReferenceOverview snapshots={
                        get(vision, "reference.snapshots", [])}/>
                    <IconButton aria-label="add to favorites"
                                color={"primary"}
                                onClick={() => {
                                    const userId = getUserIdBySession(session);
                                    if (userId) {
                                        addReaction(
                                                {
                                                    id: vision.id,
                                                    reaction: Reaction.UPVOTE,
                                                    type: ConnectType.VISION,
                                                    userId,
                                                    createReaction: createReactionOnVision,
                                                    enqueueSnackbar
                                                }
                                        );
                                    }
                                }}>
                        <Icon>{MaterialUIIcons.reply}</Icon>
                    </IconButton>
                    <LoadingButton variant={"outlined"} loading={isRedirecting} onClick={() => {
                        setIsRedirecting(true);
                        router.push(`/create/vision/${vision.premiseId}`);
                    }} aria-label="share" startIcon={<Icon>{MaterialUIIcons.account_tree_two_tone}</Icon>
                    }>
                        Create new vision
                    </LoadingButton>
                </Grid>

                <Comment connectConfig={
                    {
                        type: ConnectType.VISION,
                        id: vision?.id || ""
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
                                                                              id: vision?.id || ""
                                                                          }
                                                                      }
                                                              />):
                        <LinearProgress/>
                    }
                </Grid>
            </Grid>

    );
};
export default DetailPage;