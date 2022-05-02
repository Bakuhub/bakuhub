import { GraphQLResolveInfo } from "graphql";
import { AggregatePremiseArgs } from "./args/AggregatePremiseArgs";
import { CreateManyPremiseArgs } from "./args/CreateManyPremiseArgs";
import { CreatePremiseArgs } from "./args/CreatePremiseArgs";
import { DeleteManyPremiseArgs } from "./args/DeleteManyPremiseArgs";
import { DeletePremiseArgs } from "./args/DeletePremiseArgs";
import { FindFirstPremiseArgs } from "./args/FindFirstPremiseArgs";
import { FindManyPremiseArgs } from "./args/FindManyPremiseArgs";
import { FindUniquePremiseArgs } from "./args/FindUniquePremiseArgs";
import { GroupByPremiseArgs } from "./args/GroupByPremiseArgs";
import { UpdateManyPremiseArgs } from "./args/UpdateManyPremiseArgs";
import { UpdatePremiseArgs } from "./args/UpdatePremiseArgs";
import { UpsertPremiseArgs } from "./args/UpsertPremiseArgs";
import { Premise } from "../../../models/Premise";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePremise } from "../../outputs/AggregatePremise";
import { PremiseGroupBy } from "../../outputs/PremiseGroupBy";
export declare class PremiseCrudResolver {
    premise(ctx: any, info: GraphQLResolveInfo, args: FindUniquePremiseArgs): Promise<Premise | null>;
    findFirstPremise(ctx: any, info: GraphQLResolveInfo, args: FindFirstPremiseArgs): Promise<Premise | null>;
    premises(ctx: any, info: GraphQLResolveInfo, args: FindManyPremiseArgs): Promise<Premise[]>;
    createPremise(ctx: any, info: GraphQLResolveInfo, args: CreatePremiseArgs): Promise<Premise>;
    createManyPremise(ctx: any, info: GraphQLResolveInfo, args: CreateManyPremiseArgs): Promise<AffectedRowsOutput>;
    deletePremise(ctx: any, info: GraphQLResolveInfo, args: DeletePremiseArgs): Promise<Premise | null>;
    updatePremise(ctx: any, info: GraphQLResolveInfo, args: UpdatePremiseArgs): Promise<Premise | null>;
    deleteManyPremise(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPremiseArgs): Promise<AffectedRowsOutput>;
    updateManyPremise(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPremiseArgs): Promise<AffectedRowsOutput>;
    upsertPremise(ctx: any, info: GraphQLResolveInfo, args: UpsertPremiseArgs): Promise<Premise>;
    aggregatePremise(ctx: any, info: GraphQLResolveInfo, args: AggregatePremiseArgs): Promise<AggregatePremise>;
    groupByPremise(ctx: any, info: GraphQLResolveInfo, args: GroupByPremiseArgs): Promise<PremiseGroupBy[]>;
}