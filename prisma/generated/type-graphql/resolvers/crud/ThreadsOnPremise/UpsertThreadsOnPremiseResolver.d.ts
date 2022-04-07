import { GraphQLResolveInfo } from "graphql";
import { UpsertThreadsOnPremiseArgs } from "./args/UpsertThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
export declare class UpsertThreadsOnPremiseResolver {
    upsertThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpsertThreadsOnPremiseArgs): Promise<ThreadsOnPremise>;
}
