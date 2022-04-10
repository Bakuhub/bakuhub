import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVotesOnVisionArgs } from "./args/UpdateManyVotesOnVisionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVotesOnVisionResolver {
    updateManyVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVotesOnVisionArgs): Promise<AffectedRowsOutput>;
}
