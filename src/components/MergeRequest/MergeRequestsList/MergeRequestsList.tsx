import {MergeRequest} from "prisma/generated/type-graphql";
import {FunctionComponent} from "react";
import {List} from "@mui/material";
import {
    MergeRequestListItem
} from "src/components/MergeRequest/MergeRequestsList/MergeRequestListItem/MergeRequestListItem";

interface MergeRequestsListProps {
    mergeRequests: MergeRequest[];
}

export const MergeRequestsList: FunctionComponent<MergeRequestsListProps> = ({
                                                                                 mergeRequests,
                                                                             }) => {
    console.info("MergeRequestsList", mergeRequests);
    return <List
            sx={{width: "100%", bgcolor: "background.paper"}}>
        {mergeRequests.map((mergeRequest) =>
                                   <MergeRequestListItem
                                           mergeRequest={mergeRequest}
                                           key={mergeRequest.id}
                                   />)}
    </List>;
};