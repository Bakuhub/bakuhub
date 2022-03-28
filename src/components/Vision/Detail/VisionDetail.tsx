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

export interface VisionDetailProps {
    vision: Vision;
    premiseId?: string;
}

export const VisionDetail: React.FunctionComponent<VisionDetailProps> = ({vision, premiseId}) => {
    const router = useRouter();
    const thumbnail = getThumbnail(vision);
    const getRedirectUrl = () => premiseId ? `/premises/${premiseId}`:`/visions/${vision.id}`;
    const redirectedUrl = getRedirectUrl();
    return <Card sx={{maxWidth: 345}}>
        <CardHeader
                onClick={() => {
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
                subheader={get(vision, "activityDate", "")?.toString()}
        />
        <CardMedia
                component="img"
                height="194"
                image={thumbnail}
                alt="Premise Preview"
        />
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