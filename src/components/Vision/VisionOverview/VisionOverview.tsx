import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import get from "lodash/get";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import * as React from "react";
import {useRouter} from "next/router";
import {Vision} from "prisma/generated/type-graphql";
import {getThumbnail} from "src/utils/getThumbnail";
import {UserAvatar} from "../../User/Avatar";
import {Collapse, Tooltip} from "@mui/material";
import {fromNow} from "../../../utils/fromNow";
import moment from "moment";
import {ConnectType} from "../../../types";
import VotingButton from "../../Voting";
import {getSubStr} from "../../../utils/getSubStr";
import Link from "next/link";
import {VisionStatus} from "@constants/VisionStatus";

export interface VisionDetailProps {
    vision: Vision;
    premiseId?: string;
    hideImage?: boolean;
}

export const VisionOverview: React.FunctionComponent<VisionDetailProps> = ({
                                                                               vision, premiseId,
                                                                               hideImage
                                                                           }) => {
    const router = useRouter();
    const [expanded, setExpanded] = React.useState(false);
    const thumbnail = getThumbnail(vision);
    const getRedirectUrl = () => premiseId ? `/premise/${premiseId}/vision/${vision.id}`
                                           :`/vision/${vision.id}`;
    const getDescription = () => {
        return getSubStr(get(vision, "description", "") || "", 100);
    };
    const getTitle = () => getSubStr(get(vision, "title", "") || "", 50);

    const getDuration = () => {
        const now = moment(new Date()); //todays date
        const end = moment("2015-12-1"); // another date
        const duration = moment.duration(now.diff(end));
        const days = duration.asDays();
        return days;
    };

    const getVisionStatus = (vision: Vision) => {
        const isVisionJustCreated = moment(vision.createdAt).isAfter(moment().subtract(1, "days"));
        switch (true) {
            case isVisionJustCreated:
                return VisionStatus.justCreated;

        }
    };
    return <Card
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            sx={{maxWidth: 345, height: "100%"}}
    >
        <CardHeader
                sx={
                    {
                        cursor: "pointer",
                    }
                }
                avatar={
                    <UserAvatar {...vision.author}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={<Link href={getRedirectUrl()} passHref>
                    <Typography onClick={() => router.push(getRedirectUrl())}>
                        {getTitle()}
                    </Typography>
                </Link>
                } subheader={
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
        <CardActions>
            <VotingButton type={ConnectType.VISION} id={vision.id}/>
        </CardActions>
    </Card>;
};

