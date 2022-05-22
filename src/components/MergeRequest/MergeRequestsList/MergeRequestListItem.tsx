import ListItemAvatar from "@mui/material/ListItemAvatar";
import {Divider, ListItem, ListItemText, Typography} from "@mui/material";
import {UserAvatar} from "src/components/User/Avatar";
import {MergeRequest} from "prisma/generated/type-graphql";
import {FunctionComponent} from "react";
import {fromNow} from "src/utils/fromNow";

interface MergeRequestListItemProps {
    mergeRequest: MergeRequest;
}

export const MergeRequestListItem: FunctionComponent<MergeRequestListItemProps> = ({mergeRequest}) => {

    return <>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <UserAvatar {...mergeRequest.vision?.author} />
            </ListItemAvatar>
            <ListItemText
                    primary={<Typography variant={"h6"}>
                        {mergeRequest.title || "commit "}</Typography>}
                    secondary={
                        <>
                            <Typography
                                    sx={{display: "inline"}}
                                    variant="subtitle2"
                            >
                                opened {fromNow(mergeRequest.vision?.createdAt)} by {mergeRequest.vision?.author?.name}
                            </Typography>
                        </>
                    }
            />
        </ListItem>
        <Divider variant="inset" component="li"/>
    </>;

};