import { GraphQLResolveInfo } from "graphql";
import { FindFirstVotesOnVisionArgs } from "./args/FindFirstVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
export declare class FindFirstVotesOnVisionResolver {
    findFirstVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: FindFirstVotesOnVisionArgs): Promise<VotesOnVision | null>;
}
