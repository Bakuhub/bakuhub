import {gql} from "@apollo/client";

export const visionHistoryQuery = gql`
    query Query($where: VisionWhereInput) {
        visions(where: $where) {
            id
            prevVisionId
            author {
                id
                name
                email
                image
            }
        }
    }
`;
export const getVisionHistoryQueryVariable = (premiseId: string) => ({
    variables: {
        "where": {
            "premise": {
                "is": {
                    "id": {
                        "equals": premiseId
                    }
                }
            },
            "AND": [
                {
                    "draftMode": {
                        "equals": false
                    }
                }
            ]
        }
    }
});