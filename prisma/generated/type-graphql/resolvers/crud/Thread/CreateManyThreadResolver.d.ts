import { GraphQLResolveInfo } from "graphql";
import { CreateManyThreadArgs } from "./args/CreateManyThreadArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyThreadResolver {
    createManyThread(ctx: any, info: GraphQLResolveInfo, args: CreateManyThreadArgs): Promise<AffectedRowsOutput>;
}
