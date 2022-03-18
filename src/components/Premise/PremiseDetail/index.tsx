import * as React from "react";
import {get} from "lodash";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {Thread as ThreadCreator} from "../../Thread";
import {Premise, Thread} from "../../../../prisma/generated/type-graphql";
import {setActivePremiseId} from "../../../store/slices/premiseSlice";
import {useDispatch} from "react-redux";
import {useQuery} from "@apollo/client";
import {threadsQuery} from "../../../gql/query/threadsQuery";
import NestedList from "../../Thread/ThreadList";
import {setActiveThreadId} from "../../../store/slices/threadSlice";

interface PremiseDetailProps {
    premise: Premise;
}

export const PremiseDetail: React.FunctionComponent<PremiseDetailProps> = ({premise}) => {
    const dispatch = useDispatch();
    const {
        loading, error,
        data
    } = useQuery<{ threads: Thread[] }>(threadsQuery);

    const [expanded, setExpanded] = React.useState(false);
    console.info(premise);
    console.info(get(premise, "vision[0].reference", ""));
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.info(data?.threads);
    return (
            <>
                <CardMedia
                        component="img"
                        height="400"
                        image={get(premise, "vision[0].reference", "")}
                        alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {get(premise, "vision[0].description", "")}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon onClick={() => dispatch(setActivePremiseId(premise.id))}/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
                <ThreadCreator/>
                <NestedList/>
                {
                    data ? data.threads.map((thread, index) => <div key={index}
                                                                    onClick={() => dispatch(setActiveThreadId(thread.id))}
                    >{thread.title}</div>):<div>loading</div>
                }
            </>
    );
};