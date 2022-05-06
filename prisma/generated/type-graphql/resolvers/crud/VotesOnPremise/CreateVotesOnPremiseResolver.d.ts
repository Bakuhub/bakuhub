import { GraphQLResolveInfo } from "graphql";
import { CreateVotesOnPremiseArgs } from "./args/CreateVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
export declare class CreateVotesOnPremiseResolver {
    createVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: CreateVotesOnPremiseArgs): Promise<VotesOnPremise>;
}
