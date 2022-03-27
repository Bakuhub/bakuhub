import {gql} from "@apollo/client";

export const createSnapshotMutation = gql`
    mutation Mutation($data: SnapshotCreateInput!) {
        createSnapshot(data: $data) {
            createdAt
            versionId
            url
            sourceUrl
            caption
        }
    }
`;