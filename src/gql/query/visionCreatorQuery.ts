import {gql} from "@apollo/client";

export const visionCreatorQuery = gql`
    query Vision($where: VisionWhereUniqueInput!) {
        vision(where: $where) {
            title
            activityDate
            description
            referenceId
            tagsOnVisions {
                tag {
                    label
                    id
                }
            }
        }
    }
`;