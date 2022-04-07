import { GraphQLResolveInfo } from "graphql";
import { DeleteVisionArgs } from "./args/DeleteVisionArgs";
import { Vision } from "../../../models/Vision";
export declare class DeleteVisionResolver {
    deleteVision(ctx: any, info: GraphQLResolveInfo, args: DeleteVisionArgs): Promise<Vision | null>;
}
