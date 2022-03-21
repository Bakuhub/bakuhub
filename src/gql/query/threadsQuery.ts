import {gql} from "@apollo/client";

export const threadsQuery = gql`
    query Query {
        threads {
            title
            activityDate
            description
            createdAt
            reference
            parentThreadId
            _count {
                childThreads
            }
            childThreads {
                title
                description
                authorId
                author {
                    name
                    image
                    email
                }
            }
            author {
                name
                image
                email
            }
        }
    }
`;