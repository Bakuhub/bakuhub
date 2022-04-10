import { GraphQLResolveInfo } from "graphql";
import { UpdateVotesOnThreadArgs } from "./args/UpdateVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
export declare class UpdateVotesOnThreadResolver {
    updateVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: UpdateVotesOnThreadArgs): Promise<VotesOnThread | null>;
}
