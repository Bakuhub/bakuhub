import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnThreadsArgs } from "./args/AggregateReactionOnThreadsArgs";
import { AggregateReactionOnThreads } from "../../outputs/AggregateReactionOnThreads";
export declare class AggregateReactionOnThreadsResolver {
    aggregateReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: AggregateReactionOnThreadsArgs): Promise<AggregateReactionOnThreads>;
}
