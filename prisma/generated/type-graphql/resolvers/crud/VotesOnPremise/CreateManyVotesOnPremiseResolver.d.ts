import { GraphQLResolveInfo } from "graphql";
import { CreateManyVotesOnPremiseArgs } from "./args/CreateManyVotesOnPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVotesOnPremiseResolver {
    createManyVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: CreateManyVotesOnPremiseArgs): Promise<AffectedRowsOutput>;
}
