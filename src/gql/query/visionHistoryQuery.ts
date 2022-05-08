import {gql} from "@apollo/client";

export const visionHistoryQuery = gql`
    query Query($where: VisionWhereInput) {
        visions(where: $where) {
            id
            prevVisionId
            mergeRequest {
                description
                title
                id
            }
            createdAt
            updatedAt
            author {
                id
                name
                email
                image
            }
        }
    }
`;
export const getVisionHistoryQueryVariable = (premiseId: string) => (
        {
            variables: {
                "where": {
                    "AND": [
                        {
                            "premiseId": {
                                "equals": premiseId
                            },
                            "draftMode": {
                                "equals": false
                            }
                        }
                    ]
                },
                "orderBy": [
                    {
                        "createdAt": "asc"
                    }
                ]
            }
        }
);