import {gql} from "@apollo/client";

export const threadsQuery = gql`
    query Query {
        threads {
            id
            title
            activityDate
            description
            createdAt
            reference
            _count {
                childThreads
            }
            parentThreadId
        }
    }
`;