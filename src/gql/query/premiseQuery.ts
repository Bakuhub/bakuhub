import {gql} from "@apollo/client";

export const premiseQuery = gql`
    query Query($where: PremiseWhereUniqueInput!, $visionWhere2: VisionWhereInput) {
        premise(where: $where) {
            id
            createdAt
            updatedAt
            status
            author {
                name
                image
                email
            }
            vision(where: $visionWhere2) {
                id
                title
                tagsOnVisions {
                    tag {
                        label
                    }
                }
                activityDate
                description
                createdAt
                reactionOnVisions {
                    visionId
                    userId
                    reaction
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
        }
    }
`;