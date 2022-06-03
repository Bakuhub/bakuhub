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
            labelsOnVision{
                label{
                    name
                    color
                    description
                }
            }
            targeting {
                targetVisionId
            }
            targetedBy{
                sourceVisionId
            }
            _count {
                targetedBy
                targeting
            }
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