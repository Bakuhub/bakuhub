import { GraphQLResolveInfo } from "graphql";
import { GroupByVotesOnThreadArgs } from "./args/GroupByVotesOnThreadArgs";
import { VotesOnThreadGroupBy } from "../../outputs/VotesOnThreadGroupBy";
export declare class GroupByVotesOnThreadResolver {
    groupByVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: GroupByVotesOnThreadArgs): Promise<VotesOnThreadGroupBy[]>;
}
