import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVisionArgs } from "./args/FindUniqueVisionArgs";
import { Vision } from "../../../models/Vision";
export declare class FindUniqueVisionResolver {
    vision(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVisionArgs): Promise<Vision | null>;
}
