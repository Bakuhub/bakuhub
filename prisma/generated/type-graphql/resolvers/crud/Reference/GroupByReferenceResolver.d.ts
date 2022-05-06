import { GraphQLResolveInfo } from "graphql";
import { GroupByReferenceArgs } from "./args/GroupByReferenceArgs";
import { ReferenceGroupBy } from "../../outputs/ReferenceGroupBy";
export declare class GroupByReferenceResolver {
    groupByReference(ctx: any, info: GraphQLResolveInfo, args: GroupByReferenceArgs): Promise<ReferenceGroupBy[]>;
}
