import Card from "@mui/material/Card";
import {UserAvatar} from "../../User/Avatar";
import {Button, Icon, Tooltip} from "@mui/material";
import moment from "moment";
import Typography from "@mui/material/Typography";
import {fromNow} from "../../../utils/fromNow";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import * as React from "react";
import {FunctionComponent} from "react";
import {useRouter} from "next/router";
import {getThumbnail} from "../../../utils/getThumbnail";
import {Vision} from "../../../../prisma/generated/type-graphql";
import {LoadingButton} from "@mui/lab";

export interface VisionSearchResultProps {
    vision: Vision;
    handleClickAdd: () => void;
}

export const VisionSearchResult: FunctionComponent<VisionSearchResultProps> = ({vision, handleClickAdd}) => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const thumbnail = getThumbnail(vision);
    console.info("------------------------------------");
    console.info(vision);
    const getRedirectUrl = () => `/vision/${vision.id}`;
    const redirectedUrl = getRedirectUrl();
    return <Card>
        <CardContent>
            <UserAvatar {...vision.author}/>

            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Tooltip
                    title={vision.activityDate ? moment(vision.activityDate).format("yyyy-MMM-DD HH:mm"):""}>
                <Typography variant="h5" component="div">
                    {fromNow(vision.activityDate)}
                </Typography>
            </Tooltip>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                {vision.title}
            </Typography>
            <Typography variant="body2">
                {vision.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                    onClick={() => {
                        if (vision.id)
                            router.push(redirectedUrl);
                    }} size="small">Learn More</Button>
            <LoadingButton
                    loading={loading}
                    onClick={async () => {
                        setLoading(true);
                        await handleClickAdd();
                        setLoading(false);
                    }} size="small">
                <Icon color="primary">add_circle</Icon>
            </LoadingButton>
        </CardActions>
    </Card>;
};