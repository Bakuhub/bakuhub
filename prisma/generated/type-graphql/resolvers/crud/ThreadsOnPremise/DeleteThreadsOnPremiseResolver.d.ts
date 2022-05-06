import { GraphQLResolveInfo } from "graphql";
import { DeleteThreadsOnPremiseArgs } from "./args/DeleteThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
export declare class DeleteThreadsOnPremiseResolver {
    deleteThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: DeleteThreadsOnPremiseArgs): Promise<ThreadsOnPremise | null>;
}
