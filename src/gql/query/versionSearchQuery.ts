import {gql} from "@apollo/client";

export const versionSearchQuery = gql`
    query Visions($where: VisionWhereInput) {
        visions(where: $where) {
            id
            title
            prevVisionId
            draftMode
            description
            nextVisions {
                draftMode
            }
        }
    }`;