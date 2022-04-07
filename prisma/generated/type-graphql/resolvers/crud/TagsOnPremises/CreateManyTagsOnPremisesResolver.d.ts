import { GraphQLResolveInfo } from "graphql";
import { CreateManyTagsOnPremisesArgs } from "./args/CreateManyTagsOnPremisesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTagsOnPremisesResolver {
    createManyTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: CreateManyTagsOnPremisesArgs): Promise<AffectedRowsOutput>;
}
