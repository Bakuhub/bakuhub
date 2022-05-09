import {gql} from "@apollo/client";

export const visionWithMergeRequestQuery = gql`
    query Query($where: VisionWhereInput) {
        visions(where: $where) {
            id
            title
            activityDate
            description
            createdAt
            premiseId
            mergeRequest {
                description
                title
                id
            }
            reference {
                snapshots{
                    sourceUrl
                    createdAt
                    s3Url
                    versionId
                    id
                }
            }
            author {
                id
                image
                email
                name
            }
        }
    }
`;