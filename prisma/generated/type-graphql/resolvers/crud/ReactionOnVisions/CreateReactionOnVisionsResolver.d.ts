import { GraphQLResolveInfo } from "graphql";
import { CreateReactionOnVisionsArgs } from "./args/CreateReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
export declare class CreateReactionOnVisionsResolver {
    createReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: CreateReactionOnVisionsArgs): Promise<ReactionOnVisions>;
}
