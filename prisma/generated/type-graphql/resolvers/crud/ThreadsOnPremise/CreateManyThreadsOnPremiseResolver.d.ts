import { GraphQLResolveInfo } from "graphql";
import { CreateManyThreadsOnPremiseArgs } from "./args/CreateManyThreadsOnPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyThreadsOnPremiseResolver {
    createManyThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: CreateManyThreadsOnPremiseArgs): Promise<AffectedRowsOutput>;
}
