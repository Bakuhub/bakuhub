import {gql} from "@apollo/client";

export const mergeVisionIntoPremiseMutation = gql`
    mutation Mutation($where: VisionWhereUniqueInput!, $data: VisionUpdateInput!) {
        updateVision(where: $where, data: $data) {
            id
        }
    }
`;