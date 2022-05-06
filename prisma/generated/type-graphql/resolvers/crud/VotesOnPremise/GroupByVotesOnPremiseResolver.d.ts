import { GraphQLResolveInfo } from "graphql";
import { GroupByVotesOnPremiseArgs } from "./args/GroupByVotesOnPremiseArgs";
import { VotesOnPremiseGroupBy } from "../../outputs/VotesOnPremiseGroupBy";
export declare class GroupByVotesOnPremiseResolver {
    groupByVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: GroupByVotesOnPremiseArgs): Promise<VotesOnPremiseGroupBy[]>;
}
