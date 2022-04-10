import { GraphQLResolveInfo } from "graphql";
import { CreateVotesOnVisionArgs } from "./args/CreateVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
export declare class CreateVotesOnVisionResolver {
    createVotesOnVision(ctx: any, info: GraphQLResolveInfo, args: CreateVotesOnVisionArgs): Promise<VotesOnVision>;
}
