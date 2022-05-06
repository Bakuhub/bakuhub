import { GraphQLResolveInfo } from "graphql";
import { DeleteVotesOnThreadArgs } from "./args/DeleteVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
export declare class DeleteVotesOnThreadResolver {
    deleteVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: DeleteVotesOnThreadArgs): Promise<VotesOnThread | null>;
}
