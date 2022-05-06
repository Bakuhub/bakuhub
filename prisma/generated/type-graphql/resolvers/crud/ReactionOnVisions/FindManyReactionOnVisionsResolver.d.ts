import { GraphQLResolveInfo } from "graphql";
import { FindManyReactionOnVisionsArgs } from "./args/FindManyReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
export declare class FindManyReactionOnVisionsResolver {
    findManyReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: FindManyReactionOnVisionsArgs): Promise<ReactionOnVisions[]>;
}
