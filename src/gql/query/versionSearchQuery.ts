import {gql} from "@apollo/client";
import {AggregateVision, Vision} from "../../../prisma/generated/type-graphql";

export interface VersionSearchQueryData {
    aggregateVision: AggregateVision;
    visions: Vision[];
}

export const versionSearchQuery = gql`
    query Visions($where: VisionWhereInput,$take: Int, $skip: Int) {
        visions(where: $where,take: $take, skip: $skip) {
            id
            title
            prevVisionId
            draftMode
            description
            activityDate
            nextVisions {
                draftMode
            }
        }
        aggregateVision(where: $where) {
            _count {
                _all
            }
        }
    }
`;