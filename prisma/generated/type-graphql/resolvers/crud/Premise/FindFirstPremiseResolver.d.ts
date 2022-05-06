import { GraphQLResolveInfo } from "graphql";
import { FindFirstPremiseArgs } from "./args/FindFirstPremiseArgs";
import { Premise } from "../../../models/Premise";
export declare class FindFirstPremiseResolver {
    findFirstPremise(ctx: any, info: GraphQLResolveInfo, args: FindFirstPremiseArgs): Promise<Premise | null>;
}
