import { GraphQLResolveInfo } from "graphql";
import { GroupBySnapshotArgs } from "./args/GroupBySnapshotArgs";
import { SnapshotGroupBy } from "../../outputs/SnapshotGroupBy";
export declare class GroupBySnapshotResolver {
    groupBySnapshot(ctx: any, info: GraphQLResolveInfo, args: GroupBySnapshotArgs): Promise<SnapshotGroupBy[]>;
}
