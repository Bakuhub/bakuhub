import {gql} from "@apollo/client";

export const visionQuery = gql`
    query Vision($where: VisionWhereUniqueInput!) {
        vision(where: $where) {
            title
            id
            activityDate
            description
            createdAt
            reference
            thumbnail
            author {
                name
                image
                email
                id
            }
            prevVision {
                title
                activityDate
                description
                createdAt
                reference
                authorId
                thumbnail
                premiseId
                draftMode
                author {
                    name
                    id
                    email
                    image
                }
            }
            threadsOnVision {
                thread {
                    _count {
                        childThreads
                    }
                    author {
                        name
                        email
                        image
                        id
                    }
                }
            }
        }
    }
`;