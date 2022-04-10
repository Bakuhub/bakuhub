import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnThreadArgs } from "./args/AggregateVotesOnThreadArgs";
import { AggregateVotesOnThread } from "../../outputs/AggregateVotesOnThread";
export declare class AggregateVotesOnThreadResolver {
    aggregateVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: AggregateVotesOnThreadArgs): Promise<AggregateVotesOnThread>;
}
