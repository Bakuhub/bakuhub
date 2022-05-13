import ListItemAvatar from "@mui/material/ListItemAvatar";
import {ListItem, ListItemText, Typography} from "@mui/material";
import {UserAvatar} from "src/components/User/Avatar";
import {MergeRequest} from "prisma/generated/type-graphql";
import {FunctionComponent} from "react";

interface MergeRequestListItemProps {
    mergeRequest: MergeRequest;
}

export const MergeRequestListItem: FunctionComponent<MergeRequestListItemProps> = ({mergeRequest}) => {

    return <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <UserAvatar {...mergeRequest.vision?.author} />
        </ListItemAvatar>
        <ListItemText
                primary={mergeRequest.title}
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
                        {" — I'll be in your neighborhood doing errands this…"}
                    </>
                }
        />
    </ListItem>;

};