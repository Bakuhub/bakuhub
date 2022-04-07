import { GraphQLResolveInfo } from "graphql";
import { CreateVisionArgs } from "./args/CreateVisionArgs";
import { Vision } from "../../../models/Vision";
export declare class CreateVisionResolver {
    createVision(ctx: any, info: GraphQLResolveInfo, args: CreateVisionArgs): Promise<Vision>;
}
