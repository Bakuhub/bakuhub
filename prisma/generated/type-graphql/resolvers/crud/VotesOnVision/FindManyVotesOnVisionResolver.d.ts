import { GraphQLResolveInfo } from "graphql";
import { FindManyVotesOnVisionArgs } from "./args/FindManyVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
export declare class FindManyVotesOnVisionResolver {
    votesOnVisions(ctx: any, info: GraphQLResolveInfo, args: FindManyVotesOnVisionArgs): Promise<VotesOnVision[]>;
}
