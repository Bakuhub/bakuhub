import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadArgs } from "./args/AggregateThreadArgs";
import { AggregateThread } from "../../outputs/AggregateThread";
export declare class AggregateThreadResolver {
    aggregateThread(ctx: any, info: GraphQLResolveInfo, args: AggregateThreadArgs): Promise<AggregateThread>;
}
