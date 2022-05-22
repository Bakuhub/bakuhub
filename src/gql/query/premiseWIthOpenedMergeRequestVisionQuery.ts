import {gql} from "@apollo/client";
import gqlTemplate from "@gql/constants";

export const premiseWIthOpenedMergeRequestVisionQuery = gql`
    query Premise($where: PremiseWhereUniqueInput!, $visionWhere2: VisionWhereInput) {
        premise(where: $where) {
            vision(where: $visionWhere2) {
                ${gqlTemplate.vision.overview}
                mergeRequest {
                    title
                    description
                    status
                }
            }
        }
    }
`;