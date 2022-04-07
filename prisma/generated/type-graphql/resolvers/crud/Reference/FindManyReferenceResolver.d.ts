import { GraphQLResolveInfo } from "graphql";
import { FindManyReferenceArgs } from "./args/FindManyReferenceArgs";
import { Reference } from "../../../models/Reference";
export declare class FindManyReferenceResolver {
    references(ctx: any, info: GraphQLResolveInfo, args: FindManyReferenceArgs): Promise<Reference[]>;
}
