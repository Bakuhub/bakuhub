import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import {Premise, Thread} from "../../../../prisma/generated/type-graphql";
import {setActivePremiseId} from "../../../store/slices/premiseSlice";
import {useDispatch} from "react-redux";
import {useQuery} from "@apollo/client";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {ThreadDetail} from "../../Thread/ThreadDetail";
import ReplyIcon from "@mui/icons-material/Reply";
import {CircularProgress, Grid, LinearProgress, Tooltip} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";
import {getThumbnail} from "../../../utils/getThumbnail";
import {get} from "lodash";
import {ReferenceOverview} from "../../Reference/ReferenceOverview";
import {getThreadsQueryVariable} from "../../../gql/utils/getThreadsQueryVariable";
import {ThreadConnectType} from "../../../types";
import {Comment} from "../../Comment";
import {preprocessThreads} from "../../../utils/preprocess/threads";
import {premiseQuery} from "../../../gql/query/premiseQuery";
import {getPremiseDetailQueryVariable} from "../../../gql/utils/getPremiseDetailQueryVariable";
import {getVisionHistoryQueryVariable, visionHistoryQuery} from "../../../gql/query/VisionHistoryQuery";

interface PremiseDetailProps {
    premise: Premise;
}

export const PremiseDetailContainer = () => {
    const router = useRouter();
    const premiseId = router.query.id;
    const {data, loading} = useQuery(premiseQuery, getPremiseDetailQueryVariable(premiseId as string));
    console.info(data);
    if (loading) {
        return <CircularProgress/>;
    } else {
        return <PremiseDetail premise={data.premise}/>;
    }
};
export const PremiseDetail: React.FunctionComponent<PremiseDetailProps> = ({premise}) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const activeVision = premise.vision?.find(vision =>
            vision.nextVisions?.every(nextVision => !!nextVision.draftMode)
            && !vision.draftMode);
    const {data: threadsQueryData} = useQuery<{ threads: Thread[] }>(threadsQuery, getThreadsQueryVariable({
        threadConnectType: ThreadConnectType.VISION,
        id: activeVision?.id || ""
    }));
    const {data: visionHistoryData} = useQuery(visionHistoryQuery, getVisionHistoryQueryVariable(premise.id));
    console.info(visionHistoryData);
    const mainThreads = preprocessThreads(threadsQueryData?.threads || []);
    const allOtherVisions = premise.vision?.filter(vision => vision.id!==activeVision?.id
            && get(vision, "mergeRequest.status")==="OPEN");
    const thumbnail = getThumbnail(activeVision);

    return (
            <Grid container>
                <Grid item container xs={12}>
                    <Grid item xs={4}>
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
                    <IconButton aria-label="add to favorites" onClick={() => dispatch(setActivePremiseId(premise.id))}>
                        <ReplyIcon/>
                    </IconButton>
                    <IconButton onClick={() => router.push(`/create/vision/${premise.id}`)} aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </Grid>

                <Comment connectConfig={
                    {
                        type: ThreadConnectType.VISION,
                        id: activeVision?.id || null
                    }
                } handleCancel={() => console.info("cancel")}/>
                <Grid item container xs={12}>
                    {
                        mainThreads ? mainThreads.map((thread, index) =>
                                        <ThreadDetail
                                                key={thread.id ? thread.id:index}
                                                thread={thread}
                                                connectConfig={
                                                    {
                                                        type: ThreadConnectType.VISION,
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