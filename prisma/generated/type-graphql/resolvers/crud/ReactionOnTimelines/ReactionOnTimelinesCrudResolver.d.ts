import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnTimelinesArgs } from "./args/AggregateReactionOnTimelinesArgs";
import { CreateManyReactionOnTimelinesArgs } from "./args/CreateManyReactionOnTimelinesArgs";
import { CreateReactionOnTimelinesArgs } from "./args/CreateReactionOnTimelinesArgs";
import { DeleteManyReactionOnTimelinesArgs } from "./args/DeleteManyReactionOnTimelinesArgs";
import { DeleteReactionOnTimelinesArgs } from "./args/DeleteReactionOnTimelinesArgs";
import { FindFirstReactionOnTimelinesArgs } from "./args/FindFirstReactionOnTimelinesArgs";
import { FindManyReactionOnTimelinesArgs } from "./args/FindManyReactionOnTimelinesArgs";
import { FindUniqueReactionOnTimelinesArgs } from "./args/FindUniqueReactionOnTimelinesArgs";
import { GroupByReactionOnTimelinesArgs } from "./args/GroupByReactionOnTimelinesArgs";
import { UpdateManyReactionOnTimelinesArgs } from "./args/UpdateManyReactionOnTimelinesArgs";
import { UpdateReactionOnTimelinesArgs } from "./args/UpdateReactionOnTimelinesArgs";
import { UpsertReactionOnTimelinesArgs } from "./args/UpsertReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReactionOnTimelines } from "../../outputs/AggregateReactionOnTimelines";
import { ReactionOnTimelinesGroupBy } from "../../outputs/ReactionOnTimelinesGroupBy";
export declare class ReactionOnTimelinesCrudResolver {
    findUniqueReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null>;
    findFirstReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindFirstReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null>;
    findManyReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManyReactionOnTimelinesArgs): Promise<ReactionOnTimelines[]>;
    createReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateReactionOnTimelinesArgs): Promise<ReactionOnTimelines>;
    createManyReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput>;
    deleteReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null>;
    updateReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null>;
    deleteManyReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput>;
    updateManyReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput>;
    upsertReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpsertReactionOnTimelinesArgs): Promise<ReactionOnTimelines>;
    aggregateReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: AggregateReactionOnTimelinesArgs): Promise<AggregateReactionOnTimelines>;
    groupByReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: GroupByReactionOnTimelinesArgs): Promise<ReactionOnTimelinesGroupBy[]>;
}
