import {gql} from "@apollo/client";

export const threadsQuery = gql`
    query Threads($where: ThreadWhereInput) {
        threads  (where: $where){
            title
            id
            description
            createdAt
            reference
            parentThreadId
            _count {
                childThreads
            }
            author {
                name
                image
                email
            }
        }
    }
`;