import { GraphQLResolveInfo } from "graphql";
import { CreatePremiseArgs } from "./args/CreatePremiseArgs";
import { Premise } from "../../../models/Premise";
export declare class CreatePremiseResolver {
    createPremise(ctx: any, info: GraphQLResolveInfo, args: CreatePremiseArgs): Promise<Premise>;
}
