import { GraphQLResolveInfo } from "graphql";
import { DeleteVotesOnVisionArgs } from "./args/DeleteVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
export declare class DeleteVotesOnVisionResolver {
    deleteVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: DeleteVotesOnVisionArgs): Promise<VotesOnVision | null>;
}
