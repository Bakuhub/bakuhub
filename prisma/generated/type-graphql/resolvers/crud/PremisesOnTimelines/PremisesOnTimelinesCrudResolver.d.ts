import { GraphQLResolveInfo } from "graphql";
import { AggregatePremisesOnTimelinesArgs } from "./args/AggregatePremisesOnTimelinesArgs";
import { CreateManyPremisesOnTimelinesArgs } from "./args/CreateManyPremisesOnTimelinesArgs";
import { CreatePremisesOnTimelinesArgs } from "./args/CreatePremisesOnTimelinesArgs";
import { DeleteManyPremisesOnTimelinesArgs } from "./args/DeleteManyPremisesOnTimelinesArgs";
import { DeletePremisesOnTimelinesArgs } from "./args/DeletePremisesOnTimelinesArgs";
import { FindFirstPremisesOnTimelinesArgs } from "./args/FindFirstPremisesOnTimelinesArgs";
import { FindManyPremisesOnTimelinesArgs } from "./args/FindManyPremisesOnTimelinesArgs";
import { FindUniquePremisesOnTimelinesArgs } from "./args/FindUniquePremisesOnTimelinesArgs";
import { GroupByPremisesOnTimelinesArgs } from "./args/GroupByPremisesOnTimelinesArgs";
import { UpdateManyPremisesOnTimelinesArgs } from "./args/UpdateManyPremisesOnTimelinesArgs";
import { UpdatePremisesOnTimelinesArgs } from "./args/UpdatePremisesOnTimelinesArgs";
import { UpsertPremisesOnTimelinesArgs } from "./args/UpsertPremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePremisesOnTimelines } from "../../outputs/AggregatePremisesOnTimelines";
import { PremisesOnTimelinesGroupBy } from "../../outputs/PremisesOnTimelinesGroupBy";
export declare class PremisesOnTimelinesCrudResolver {
    findUniquePremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindUniquePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null>;
    findFirstPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindFirstPremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null>;
    findManyPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManyPremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]>;
    createPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreatePremisesOnTimelinesArgs): Promise<PremisesOnTimelines>;
    createManyPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput>;
    deletePremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeletePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null>;
    updatePremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdatePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null>;
    deleteManyPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput>;
    updateManyPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput>;
    upsertPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpsertPremisesOnTimelinesArgs): Promise<PremisesOnTimelines>;
    aggregatePremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: AggregatePremisesOnTimelinesArgs): Promise<AggregatePremisesOnTimelines>;
    groupByPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: GroupByPremisesOnTimelinesArgs): Promise<PremisesOnTimelinesGroupBy[]>;
}
