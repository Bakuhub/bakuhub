import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVotesOnThreadArgs } from "./args/DeleteManyVotesOnThreadArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVotesOnThreadResolver {
    deleteManyVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVotesOnThreadArgs): Promise<AffectedRowsOutput>;
}
