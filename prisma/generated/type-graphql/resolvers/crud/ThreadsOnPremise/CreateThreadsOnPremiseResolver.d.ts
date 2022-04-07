import { GraphQLResolveInfo } from "graphql";
import { CreateThreadsOnPremiseArgs } from "./args/CreateThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
export declare class CreateThreadsOnPremiseResolver {
    createThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: CreateThreadsOnPremiseArgs): Promise<ThreadsOnPremise>;
}
