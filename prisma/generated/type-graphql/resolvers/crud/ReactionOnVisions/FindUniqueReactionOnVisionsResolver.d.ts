import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReactionOnVisionsArgs } from "./args/FindUniqueReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
export declare class FindUniqueReactionOnVisionsResolver {
    findUniqueReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReactionOnVisionsArgs): Promise<ReactionOnVisions | null>;
}
