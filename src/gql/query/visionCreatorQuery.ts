import {gql} from "@apollo/client";

export const visionCreatorQuery = gql`
    query Vision($where: VisionWhereUniqueInput!) {
        vision(where: $where) {
            title
            activityDate
            id
            description
            referenceId
            premiseId
            thumbnail
            reference {
                snapshots {
                    id
                    s3Url
                    sourceUrl
                    versionId
                    createdAt
                    updatedAt
                }
            }
            tagsOnVisions {
                tag {
                    label
                    id
                }
            }
        }
    }
`;