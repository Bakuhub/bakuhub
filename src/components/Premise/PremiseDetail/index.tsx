import * as React from "react";
import {get} from "lodash";
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

interface PremiseDetailProps {
    premise: Premise;
}

export const PremiseDetail: React.FunctionComponent<PremiseDetailProps> = ({premise}) => {
    const dispatch = useDispatch();
    const {
        loading, error,
        data
    } = useQuery<{ threads: Thread[] }>(threadsQuery);
    const activeVision = premise.vision?.find(vision =>
            vision.nextVision?.every(nextVision => !!nextVision.draftMode)
            && !vision.draftMode);
    const allOtherVisions = premise.vision?.filter(vision => vision.id!==activeVision?.id);
    console.info("active vision");
    console.info(activeVision);
    const [expanded, setExpanded] = React.useState(false);
    console.info(premise);
    console.info(get(premise, "vision[0].reference", ""));
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
            <>
                <Grid>
                    <Image
                            height="400"
                            width="400"
                            src={get(premise, "vision[0].reference", "")}
                            alt="Paella dish"
                    />
                    <Typography variant="body2" color="text.secondary">
                        {get(premise, "vision[0].description", "")}
                    </Typography>
                    <IconButton aria-label="add to favorites">
                        <ReplyIcon onClick={() => dispatch(setActivePremiseId(premise.id))}/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </Grid>
                <Grid>
                    {
                        allOtherVisions?.map(vision => <div id={vision.id}>{vision.id}</div>)
                    }
                </Grid>
                <ThreadCreator/>
                {
                    data ? data.threads.map((thread, index) => <ThreadDetail key={thread.id} thread={thread}/>):
                            // eslint-disable-next-line react/jsx-no-undef
                            <LinearProgress/>
                }
            </>
    );
};