import { GraphQLResolveInfo } from "graphql";
import { CreateManyReactionOnVisionsArgs } from "./args/CreateManyReactionOnVisionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReactionOnVisionsResolver {
    createManyReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: CreateManyReactionOnVisionsArgs): Promise<AffectedRowsOutput>;
}
