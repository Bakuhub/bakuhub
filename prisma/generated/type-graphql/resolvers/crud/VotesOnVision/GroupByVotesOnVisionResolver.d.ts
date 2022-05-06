import { GraphQLResolveInfo } from "graphql";
import { GroupByVotesOnVisionArgs } from "./args/GroupByVotesOnVisionArgs";
import { VotesOnVisionGroupBy } from "../../outputs/VotesOnVisionGroupBy";
export declare class GroupByVotesOnVisionResolver {
    groupByVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: GroupByVotesOnVisionArgs): Promise<VotesOnVisionGroupBy[]>;
}
