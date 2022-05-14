import {FunctionComponent} from "react";
import {VisionViewsHistory} from "prisma/generated/type-graphql";
import {ListItem, ListItemText, Typography} from "@mui/material";
import {UserAvatar} from "../../User/Avatar";
import moment from "moment";

interface VisionViewsHistoryItemProps {
    visionViewsHistory: VisionViewsHistory;
}

export const VisionViewsHistoryItem: FunctionComponent<VisionViewsHistoryItemProps>
        = ({visionViewsHistory}) => {
    return <ListItem alignItems="flex-start">

        <UserAvatar {...visionViewsHistory.vision?.author}/>
        <ListItemText
                primary={visionViewsHistory.vision?.title}
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