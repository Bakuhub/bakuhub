import { GraphQLResolveInfo } from "graphql";
import { UpdateVisionArgs } from "./args/UpdateVisionArgs";
import { Vision } from "../../../models/Vision";
export declare class UpdateVisionResolver {
    updateVision(ctx: any, info: GraphQLResolveInfo, args: UpdateVisionArgs): Promise<Vision | null>;
}
