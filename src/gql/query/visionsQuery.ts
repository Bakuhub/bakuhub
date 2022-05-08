import {gql} from "@apollo/client";

export const visionsQuery = gql`
    query Visions($where: VisionWhereInput) {
        visions(where: $where) {
            id
            title
            activityDate
            description
            createdAt
            premiseId
            reference {
                snapshots{
                    sourceUrl
                    createdAt
                    s3Url
                    versionId
                    id
                }
            }
            authorId
            prevVisionId
            draftMode
            mergeRequest {
                id
                status
                title
                description
            }
            nextVisions {
                id
                title
                activityDate
                description
                createdAt
                draftMode
            }
        }
    }`;