import { GraphQLResolveInfo } from "graphql";
import { UpsertPremiseArgs } from "./args/UpsertPremiseArgs";
import { Premise } from "../../../models/Premise";
export declare class UpsertPremiseResolver {
    upsertPremise(ctx: any, info: GraphQLResolveInfo, args: UpsertPremiseArgs): Promise<Premise>;
}
