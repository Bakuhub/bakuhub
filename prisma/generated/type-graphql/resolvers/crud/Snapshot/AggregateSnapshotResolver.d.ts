import { GraphQLResolveInfo } from "graphql";
import { AggregateSnapshotArgs } from "./args/AggregateSnapshotArgs";
import { AggregateSnapshot } from "../../outputs/AggregateSnapshot";
export declare class AggregateSnapshotResolver {
    aggregateSnapshot(ctx: any, info: GraphQLResolveInfo, args: AggregateSnapshotArgs): Promise<AggregateSnapshot>;
}
