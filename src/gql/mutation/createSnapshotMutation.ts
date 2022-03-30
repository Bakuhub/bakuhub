import {gql} from "@apollo/client";

export const createSnapshotMutation = gql`
    mutation Mutation($data: SnapshotCreateInput!) {
        createSnapshot(data: $data) {
            id
            createdAt
            versionId
            s3Url
            sourceUrl
            caption
        }
    }
`;