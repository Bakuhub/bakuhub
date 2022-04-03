import {visionQuery} from "../query/visionQuery";
import {getVisionDetailVariable} from "../utils/getVisionDetailVariable";
import {DocumentNode} from "graphql";

export const getVisionQueryArgs = (visionId: string): [DocumentNode, { variables: { where: { id: string } } }] =>
        [visionQuery, getVisionDetailVariable(visionId)];
