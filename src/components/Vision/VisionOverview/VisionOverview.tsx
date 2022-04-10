import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import get from "lodash/get";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import ShareIcon from "@mui/icons-material/Share";
import * as React from "react";
import {useRouter} from "next/router";
import {Vision} from "../../../../prisma/generated/type-graphql";
import {getThumbnail} from "../../../utils/getThumbnail";
import {UserAvatar} from "../../User/Avatar";
import {Collapse, Tooltip} from "@mui/material";
import {fromNow} from "../../../utils/fromNow";
import moment from "moment";
import {ReactionButtons} from "../../Reaction";
import {useMutation} from "@apollo/client";
import {upsertReactionOnVisionsMutation} from "../../../gql/mutation/createReactionOnVisionMutation";
import {ConnectType} from "../../../types";

export interface VisionDetailProps {
    vision: Vision;
    premiseId?: string;
    hideImage?: boolean;
}

export const VisionOverview: React.FunctionComponent<VisionDetailProps> = ({vision, premiseId, hideImage}) => {
    const router = useRouter();
    const [expanded, setExpanded] = React.useState(false);
    const thumbnail = getThumbnail(vision);
    const getRedirectUrl = () => premiseId ? `/premise/${premiseId}`:`/vision/${vision.id}`;
    const getDescription = () => {
        const description = get(vision, "description", "");
        if (description && description.length > 100) {
            return description.substring(0, 100) + "...";
        } else {
            return description;
        }
    };
    const [createReaction] = useMutation(upsertReactionOnVisionsMutation);
    const redirectedUrl = getRedirectUrl();
    return <Card
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            sx={{maxWidth: 345}}
    >
        <CardHeader
                onClick={() => {
                    if (premiseId || vision.id) {
                        router.push(redirectedUrl);
                    }
                }}
                avatar={
                    <UserAvatar {...vision.author}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={vision.title}
                subheader={
                    <Tooltip
                            title={vision.activityDate
                                   ?
                                   moment(vision.activityDate).format("yyyy-MMM-DD HH:mm")
                                   :""}>
                        <Typography>{fromNow(vision.activityDate)}</Typography>
                    </Tooltip>
                }
        />
        <Collapse
                in={expanded || !hideImage}
                timeout="auto"
                unmountOnExit
        >
            <CardMedia
                    component="img"
                    height="194"
                    image={thumbnail}
                    alt="Premise Preview"
            />
        </Collapse>
        <CardContent>
            <Typography
                    variant="body2"
                    color="text.secondary"
            >
                {getDescription()}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <ReactionButtons createReaction={createReaction} type={ConnectType.VISION} id={vision.id}/>
            <IconButton onClick={() => router.push(`/create/vision/${premiseId}`)} aria-label="share">
                <ShareIcon/>
            </IconButton>
        </CardActions>
    </Card>;
};