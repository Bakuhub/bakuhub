import { GraphQLResolveInfo } from "graphql";
import { UpsertVotesOnVisionArgs } from "./args/UpsertVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
export declare class UpsertVotesOnVisionResolver {
    upsertVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: UpsertVotesOnVisionArgs): Promise<VotesOnVision>;
}
