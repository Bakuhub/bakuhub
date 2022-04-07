import { GraphQLResolveInfo } from "graphql";
import { FindUniquePremiseArgs } from "./args/FindUniquePremiseArgs";
import { Premise } from "../../../models/Premise";
export declare class FindUniquePremiseResolver {
    premise(ctx: any, info: GraphQLResolveInfo, args: FindUniquePremiseArgs): Promise<Premise | null>;
}
