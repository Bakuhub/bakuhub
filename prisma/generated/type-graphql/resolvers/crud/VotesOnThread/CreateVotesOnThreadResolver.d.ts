import { GraphQLResolveInfo } from "graphql";
import { CreateVotesOnThreadArgs } from "./args/CreateVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
export declare class CreateVotesOnThreadResolver {
    createVotesOnThread(ctx: any, info: GraphQLResolveInfo, args: CreateVotesOnThreadArgs): Promise<VotesOnThread>;
}
