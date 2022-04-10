import {gql} from "@apollo/client";

export const createTimelineMutation = gql`
    mutation Mutation($data: TimelineCreateInput!) {
        createTimeline(data: $data) {
            id
        }
    }`;
