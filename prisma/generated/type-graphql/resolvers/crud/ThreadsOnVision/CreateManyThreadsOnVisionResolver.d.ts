import { GraphQLResolveInfo } from "graphql";
import { CreateManyThreadsOnVisionArgs } from "./args/CreateManyThreadsOnVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyThreadsOnVisionResolver {
    createManyThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: CreateManyThreadsOnVisionArgs): Promise<AffectedRowsOutput>;
}
