import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {get} from "lodash";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import * as React from "react";
import {useRouter} from "next/router";
import {Vision} from "../../../../prisma/generated/type-graphql";
import {getThumbnail} from "../../../utils/getThumbnail";
import {UserAvatar} from "../../User/Avatar";
import {Collapse, Tooltip} from "@mui/material";
import {fromNow} from "../../../utils/fromNow";
import moment from "moment";

export interface VisionDetailProps {
    vision: Vision;
    premiseId?: string;
    hideImage?: boolean;
}

export const VisionOverview: React.FunctionComponent<VisionDetailProps> = ({vision, premiseId, hideImage}) => {
    const router = useRouter();
    const [expanded, setExpanded] = React.useState(false);
    const thumbnail = getThumbnail(vision);
    console.info("------------------------------------");
    console.info(vision);
    const getRedirectUrl = () => premiseId ? `/premise/${premiseId}`:`/vision/${vision.id}`;
    const redirectedUrl = getRedirectUrl();
    return <Card
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            sx={{maxWidth: 345}}>
        <CardHeader
                onClick={() => {
                    if (premiseId || vision.id)
                        router.push(redirectedUrl);
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
                subheader={<Tooltip
                        title={vision.activityDate ? moment(vision.activityDate).format("yyyy-MMM-DD HH:mm"):""}>
                    <Typography>{fromNow(vision.activityDate)}</Typography>
                </Tooltip>}
        />
        <Collapse in={expanded || !hideImage} timeout="auto" unmountOnExit>

            <CardMedia
                    component="img"
                    height="194"
                    image={thumbnail}
                    alt="Premise Preview"
            />
        </Collapse>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {get(vision, "description", "")}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon/>
            </IconButton>
            <IconButton onClick={() => router.push(`/create/vision/${premiseId}`)} aria-label="share">
                <ShareIcon/>
            </IconButton>
        </CardActions>
    </Card>;
};