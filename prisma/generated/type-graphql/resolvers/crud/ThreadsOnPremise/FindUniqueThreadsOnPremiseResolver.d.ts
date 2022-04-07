import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThreadsOnPremiseArgs } from "./args/FindUniqueThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
export declare class FindUniqueThreadsOnPremiseResolver {
    threadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: FindUniqueThreadsOnPremiseArgs): Promise<ThreadsOnPremise | null>;
}
