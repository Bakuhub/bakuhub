import { GraphQLResolveInfo } from "graphql";
import { DeletePremiseArgs } from "./args/DeletePremiseArgs";
import { Premise } from "../../../models/Premise";
export declare class DeletePremiseResolver {
    deletePremise(ctx: any, info: GraphQLResolveInfo, args: DeletePremiseArgs): Promise<Premise | null>;
}
