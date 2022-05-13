import {MergeRequest} from "prisma/generated/type-graphql";
import {FunctionComponent} from "react";
import {Divider, List} from "@mui/material";
import {MergeRequestListItem} from "./MergeRequestListItem";

interface MergeRequestsListProps {
    mergeRequests: MergeRequest[];
}

export const MergeRequestsList: FunctionComponent<MergeRequestsListProps> = ({
                                                                                 mergeRequests,
                                                                             }) => {
    return <List sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}>
        {mergeRequests.map((mergeRequest) => <MergeRequestListItem mergeRequest={mergeRequest} key={mergeRequest.id}/>)}
        <Divider variant="inset" component="li"/>
    </List>;


};