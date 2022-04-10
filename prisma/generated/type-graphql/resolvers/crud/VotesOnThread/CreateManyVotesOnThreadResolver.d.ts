import { GraphQLResolveInfo } from "graphql";
import { CreateManyVotesOnThreadArgs } from "./args/CreateManyVotesOnThreadArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVotesOnThreadResolver {
    createManyVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: CreateManyVotesOnThreadArgs): Promise<AffectedRowsOutput>;
}
