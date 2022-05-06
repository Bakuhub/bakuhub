import { GraphQLResolveInfo } from "graphql";
import { FindManyVisionArgs } from "./args/FindManyVisionArgs";
import { Vision } from "../../../models/Vision";
export declare class FindManyVisionResolver {
    visions(ctx: any, info: GraphQLResolveInfo, args: FindManyVisionArgs): Promise<Vision[]>;
}
