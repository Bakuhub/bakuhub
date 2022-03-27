import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import {ThreadCreator} from "../../Thread/ThreadCreator";
import {Premise, Thread} from "../../../../prisma/generated/type-graphql";
import {setActivePremiseId} from "../../../store/slices/premiseSlice";
import {useDispatch} from "react-redux";
import {useQuery} from "@apollo/client";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import {ThreadDetail} from "../../Thread/ThreadDetail";
import ReplyIcon from "@mui/icons-material/Reply";
import {Grid, LinearProgress} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";
import {getThumbnail} from "../../../utils/getThumbnail";
import {get} from "lodash";

interface PremiseDetailProps {
    premise: Premise;
}

export const PremiseDetail: React.FunctionComponent<PremiseDetailProps> = ({premise}) => {
    const router = useRouter();
    console.info("-----this is premise================");
    console.info(premise);
    const dispatch = useDispatch();
    const {
        data
    } = useQuery<{ threads: Thread[] }>(threadsQuery);
    const activeVision = premise.vision?.find(vision =>
            vision.nextVision?.every(nextVision => !!nextVision.draftMode)
            && !vision.draftMode);
    const allOtherVisions = premise.vision?.filter(vision => vision.id!==activeVision?.id
            && get(vision, "mergeRequest.status")==="OPEN");
    const thumbnail = getThumbnail(activeVision);
    return (
            <>
                <Grid>
                    <Image
                            height="400"
                            width="400"
                            src={thumbnail}
                            alt="Paella dish"
                    />
                    <Typography variant="body2" color="text.secondary">
                        {activeVision?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {activeVision?.description}
                    </Typography>
                    <IconButton aria-label="add to favorites" onClick={() => dispatch(setActivePremiseId(premise.id))}>
                        <ReplyIcon/>
                    </IconButton>
                    <IconButton onClick={() => router.push(`/create/vision/${premise.id}`)} aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </Grid>
                <Grid item container md={6}>
                    <Typography variant={"subtitle1"}> Merge requests opened:</Typography>
                    {
                        allOtherVisions?.map(vision =>
                                <Typography key={vision.id}
                                            onClick={() => router.push(`/review/mergeRequest/${get(vision, "mergeRequest.id", false)}`)}
                                >{vision.id}
                                </Typography>)
                    }
                </Grid>
                <ThreadCreator/>
                {
                    data ? data.threads.map((thread, index) => <ThreadDetail key={thread.id ? thread.id:index}
                                                                             thread={thread}/>):
                            // eslint-disable-next-line react/jsx-no-undef
                            <LinearProgress/>
                }
            </>
    );
};