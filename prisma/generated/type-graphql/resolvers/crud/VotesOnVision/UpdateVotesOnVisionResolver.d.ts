import { GraphQLResolveInfo } from "graphql";
import { UpdateVotesOnVisionArgs } from "./args/UpdateVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
export declare class UpdateVotesOnVisionResolver {
    updateVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: UpdateVotesOnVisionArgs): Promise<VotesOnVision | null>;
}
