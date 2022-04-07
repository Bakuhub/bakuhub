import { GraphQLResolveInfo } from "graphql";
import { UpdateReactionOnVisionsArgs } from "./args/UpdateReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
export declare class UpdateReactionOnVisionsResolver {
    updateReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: UpdateReactionOnVisionsArgs): Promise<ReactionOnVisions | null>;
}
