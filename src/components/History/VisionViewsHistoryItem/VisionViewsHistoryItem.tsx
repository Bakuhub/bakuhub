import {FunctionComponent} from "react";
import {VisionViewsHistory} from "prisma/generated/type-graphql";
import {ListItem, ListItemText, Typography} from "@mui/material";
import {UserAvatar} from "../../User/Avatar";
import moment from "moment";
import Link from "next/link";

interface VisionViewsHistoryItemProps {
    visionViewsHistory: VisionViewsHistory;
}

export const VisionViewsHistoryItem: FunctionComponent<VisionViewsHistoryItemProps>
        = ({visionViewsHistory}) => {
    return <ListItem alignItems="center">
        <UserAvatar {...visionViewsHistory.vision?.author}/>
        <ListItemText
                sx={
                    {
                        marginLeft: "1rem",
                    }
                }
                primary={
                    <Link href={`/premise/${visionViewsHistory.vision?.premiseId}/vision/${visionViewsHistory.vision?.id}`}>
                        <Typography variant="body1">
                            {visionViewsHistory.vision?.title}1111
                        </Typography>
                    </Link>}
                secondary={
                    <>
                        <Typography
                                sx={{display: "inline"}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {` — ${moment(visionViewsHistory.createdAt).fromNow()}`}
                    </>
                }
        />
    </ListItem>;

};

export default VisionViewsHistoryItem;