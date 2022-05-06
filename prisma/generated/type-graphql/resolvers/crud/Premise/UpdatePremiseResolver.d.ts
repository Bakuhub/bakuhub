import { GraphQLResolveInfo } from "graphql";
import { UpdatePremiseArgs } from "./args/UpdatePremiseArgs";
import { Premise } from "../../../models/Premise";
export declare class UpdatePremiseResolver {
    updatePremise(ctx: any, info: GraphQLResolveInfo, args: UpdatePremiseArgs): Promise<Premise | null>;
}
