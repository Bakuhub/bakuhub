import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReactionOnVisionsArgs } from "./args/UpdateManyReactionOnVisionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReactionOnVisionsResolver {
    updateManyReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReactionOnVisionsArgs): Promise<AffectedRowsOutput>;
}
