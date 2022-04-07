import { GraphQLResolveInfo } from "graphql";
import { CreateManyVisionArgs } from "./args/CreateManyVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVisionResolver {
    createManyVision(ctx: any, info: GraphQLResolveInfo, args: CreateManyVisionArgs): Promise<AffectedRowsOutput>;
}
