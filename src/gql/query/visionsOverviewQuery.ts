import {gql} from "@apollo/client";
import gqlTemplate from "@gql/constants";

export const visionsOverviewQuery = gql`
    query Visions($where: VisionWhereInput) {
        visions(where: $where) {
            ${gqlTemplate.vision.overview}
        }
    }`;