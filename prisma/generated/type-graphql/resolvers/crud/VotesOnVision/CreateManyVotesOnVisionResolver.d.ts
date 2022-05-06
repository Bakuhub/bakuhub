import { GraphQLResolveInfo } from "graphql";
import { CreateManyVotesOnVisionArgs } from "./args/CreateManyVotesOnVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVotesOnVisionResolver {
    createManyVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: CreateManyVotesOnVisionArgs): Promise<AffectedRowsOutput>;
}
