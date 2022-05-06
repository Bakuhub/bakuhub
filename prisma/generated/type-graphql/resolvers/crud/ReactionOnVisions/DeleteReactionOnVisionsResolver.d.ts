import { GraphQLResolveInfo } from "graphql";
import { DeleteReactionOnVisionsArgs } from "./args/DeleteReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
export declare class DeleteReactionOnVisionsResolver {
    deleteReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: DeleteReactionOnVisionsArgs): Promise<ReactionOnVisions | null>;
}
