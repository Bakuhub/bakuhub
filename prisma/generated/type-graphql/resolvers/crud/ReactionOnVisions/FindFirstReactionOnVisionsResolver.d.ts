import { GraphQLResolveInfo } from "graphql";
import { FindFirstReactionOnVisionsArgs } from "./args/FindFirstReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
export declare class FindFirstReactionOnVisionsResolver {
    findFirstReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: FindFirstReactionOnVisionsArgs): Promise<ReactionOnVisions | null>;
}
