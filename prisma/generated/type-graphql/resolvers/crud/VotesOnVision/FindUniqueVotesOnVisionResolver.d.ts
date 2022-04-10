import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVotesOnVisionArgs } from "./args/FindUniqueVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
export declare class FindUniqueVotesOnVisionResolver {
    votesOnVision(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVotesOnVisionArgs): Promise<VotesOnVision | null>;
}
