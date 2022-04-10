import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVotesOnThreadArgs } from "./args/UpdateManyVotesOnThreadArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVotesOnThreadResolver {
    updateManyVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVotesOnThreadArgs): Promise<AffectedRowsOutput>;
}
