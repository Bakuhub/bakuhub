import { GraphQLResolveInfo } from "graphql";
import { UpsertVotesOnPremiseArgs } from "./args/UpsertVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
export declare class UpsertVotesOnPremiseResolver {
    upsertVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpsertVotesOnPremiseArgs): Promise<VotesOnPremise>;
}
