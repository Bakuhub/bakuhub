import { GraphQLResolveInfo } from "graphql";
import { UpsertVisionArgs } from "./args/UpsertVisionArgs";
import { Vision } from "../../../models/Vision";
export declare class UpsertVisionResolver {
    upsertVision(ctx: any, info: GraphQLResolveInfo, args: UpsertVisionArgs): Promise<Vision>;
}
