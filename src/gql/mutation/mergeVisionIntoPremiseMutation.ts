import {gql} from "@apollo/client";

export const mergeVisionIntoPremiseMutation = gql`
    mutation Mutation($data: VisionUpdateInput!, $where: VisionWhereUniqueInput!) {
        updateVision(data: $data, where: $where) {
            activityDate
        }
    }
`;