import { GraphQLResolveInfo } from "graphql";
import { FindManyThreadsOnPremiseArgs } from "./args/FindManyThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
export declare class FindManyThreadsOnPremiseResolver {
    threadsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindManyThreadsOnPremiseArgs): Promise<ThreadsOnPremise[]>;
}
