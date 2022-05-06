import { GraphQLResolveInfo } from "graphql";
import { CreateManyPremiseArgs } from "./args/CreateManyPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPremiseResolver {
    createManyPremise(ctx: any, info: GraphQLResolveInfo, args: CreateManyPremiseArgs): Promise<AffectedRowsOutput>;
}
