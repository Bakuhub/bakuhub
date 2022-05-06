import { GraphQLResolveInfo } from "graphql";
import { FindFirstVisionArgs } from "./args/FindFirstVisionArgs";
import { Vision } from "../../../models/Vision";
export declare class FindFirstVisionResolver {
    findFirstVision(ctx: any, info: GraphQLResolveInfo, args: FindFirstVisionArgs): Promise<Vision | null>;
}
