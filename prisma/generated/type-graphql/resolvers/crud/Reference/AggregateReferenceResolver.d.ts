import { GraphQLResolveInfo } from "graphql";
import { AggregateReferenceArgs } from "./args/AggregateReferenceArgs";
import { AggregateReference } from "../../outputs/AggregateReference";
export declare class AggregateReferenceResolver {
    aggregateReference(ctx: any, info: GraphQLResolveInfo, args: AggregateReferenceArgs): Promise<AggregateReference>;
}
