import { GraphQLResolveInfo } from "graphql";
import { FindManyPremiseArgs } from "./args/FindManyPremiseArgs";
import { Premise } from "../../../models/Premise";
export declare class FindManyPremiseResolver {
    premises(ctx: any, info: GraphQLResolveInfo, args: FindManyPremiseArgs): Promise<Premise[]>;
}
