import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVotesOnVisionArgs } from "./args/DeleteManyVotesOnVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVotesOnVisionResolver {
    deleteManyVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVotesOnVisionArgs): Promise<AffectedRowsOutput>;
}
