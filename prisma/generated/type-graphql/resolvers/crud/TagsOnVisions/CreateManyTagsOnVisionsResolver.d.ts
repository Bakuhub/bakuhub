import { GraphQLResolveInfo } from "graphql";
import { CreateManyTagsOnVisionsArgs } from "./args/CreateManyTagsOnVisionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTagsOnVisionsResolver {
    createManyTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: CreateManyTagsOnVisionsArgs): Promise<AffectedRowsOutput>;
}
