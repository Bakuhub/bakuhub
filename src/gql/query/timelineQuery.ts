import {gql} from "@apollo/client";

export const timelineQuery = gql`
    query Timeline($where: TimelineWhereUniqueInput!, $visionWhere2: VisionWhereInput) {
        timeline(where: $where) {
            title
            description
            status
            premisesOnTimelines {
                premise {
                    vision(where: $visionWhere2) {
                        title
                        description
                    }
                }
            }
        }
    }
`;