import { GraphQLResolveInfo } from "graphql";
import { UpsertReferenceArgs } from "./args/UpsertReferenceArgs";
import { Reference } from "../../../models/Reference";
export declare class UpsertReferenceResolver {
    upsertReference(ctx: any, info: GraphQLResolveInfo, args: UpsertReferenceArgs): Promise<Reference>;
}
