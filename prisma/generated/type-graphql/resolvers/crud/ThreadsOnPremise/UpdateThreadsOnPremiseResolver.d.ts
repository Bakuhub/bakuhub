import { GraphQLResolveInfo } from "graphql";
import { UpdateThreadsOnPremiseArgs } from "./args/UpdateThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
export declare class UpdateThreadsOnPremiseResolver {
    updateThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpdateThreadsOnPremiseArgs): Promise<ThreadsOnPremise | null>;
}
