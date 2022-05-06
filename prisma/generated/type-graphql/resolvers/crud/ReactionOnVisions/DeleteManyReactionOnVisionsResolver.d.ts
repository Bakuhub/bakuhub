import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReactionOnVisionsArgs } from "./args/DeleteManyReactionOnVisionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReactionOnVisionsResolver {
    deleteManyReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReactionOnVisionsArgs): Promise<AffectedRowsOutput>;
}
