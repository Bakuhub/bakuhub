import {gql} from "@apollo/client";

export const createPremiseMutation = gql`
    mutation CreatePremise($data: PremiseCreateInput!) {
        createPremise(data: $data) {
            id
            title
            createdAt
            updatedAt
            status
            authorId
            _count {
                premisesOnTimelines
                tagsOnPremises
                vision
            }
            vision {
                activityDate
                description
                createdAt
                reference
                authorId
                premiseId
                title
                prevVisionId
                author {
                    name
                    email
                }
                nextVisions {
                    description
                    authorId
                }
            }
        }
    }
`;