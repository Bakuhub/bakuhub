import { GraphQLResolveInfo } from "graphql";
import { UpsertReactionOnVisionsArgs } from "./args/UpsertReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
export declare class UpsertReactionOnVisionsResolver {
    upsertReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: UpsertReactionOnVisionsArgs): Promise<ReactionOnVisions>;
}
