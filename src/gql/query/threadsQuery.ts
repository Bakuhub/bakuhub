import {gql} from "@apollo/client";

export const threadsQuery = gql`
    query Threads($where: ThreadWhereInput) {
        threads  (where: $where){
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