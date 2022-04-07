import { GraphQLResolveInfo } from "graphql";
import { FindFirstThreadsOnPremiseArgs } from "./args/FindFirstThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
export declare class FindFirstThreadsOnPremiseResolver {
    findFirstThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: FindFirstThreadsOnPremiseArgs): Promise<ThreadsOnPremise | null>;
}
