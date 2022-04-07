import { GraphQLResolveInfo } from "graphql";
import { CreateReactionOnThreadsArgs } from "./args/CreateReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
export declare class CreateReactionOnThreadsResolver {
    createReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: CreateReactionOnThreadsArgs): Promise<ReactionOnThreads>;
}
