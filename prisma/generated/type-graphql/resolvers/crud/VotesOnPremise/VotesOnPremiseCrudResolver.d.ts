import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnPremiseArgs } from "./args/AggregateVotesOnPremiseArgs";
import { CreateManyVotesOnPremiseArgs } from "./args/CreateManyVotesOnPremiseArgs";
import { CreateVotesOnPremiseArgs } from "./args/CreateVotesOnPremiseArgs";
import { DeleteManyVotesOnPremiseArgs } from "./args/DeleteManyVotesOnPremiseArgs";
import { DeleteVotesOnPremiseArgs } from "./args/DeleteVotesOnPremiseArgs";
import { FindFirstVotesOnPremiseArgs } from "./args/FindFirstVotesOnPremiseArgs";
import { FindManyVotesOnPremiseArgs } from "./args/FindManyVotesOnPremiseArgs";
import { FindUniqueVotesOnPremiseArgs } from "./args/FindUniqueVotesOnPremiseArgs";
import { GroupByVotesOnPremiseArgs } from "./args/GroupByVotesOnPremiseArgs";
import { UpdateManyVotesOnPremiseArgs } from "./args/UpdateManyVotesOnPremiseArgs";
import { UpdateVotesOnPremiseArgs } from "./args/UpdateVotesOnPremiseArgs";
import { UpsertVotesOnPremiseArgs } from "./args/UpsertVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVotesOnPremise } from "../../outputs/AggregateVotesOnPremise";
import { VotesOnPremiseGroupBy } from "../../outputs/VotesOnPremiseGroupBy";
export declare class VotesOnPremiseCrudResolver {
    votesOnPremise(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVotesOnPremiseArgs): Promise<VotesOnPremise | null>;
    findFirstVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: FindFirstVotesOnPremiseArgs): Promise<VotesOnPremise | null>;
    votesOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindManyVotesOnPremiseArgs): Promise<VotesOnPremise[]>;
    createVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: CreateVotesOnPremiseArgs): Promise<VotesOnPremise>;
    createManyVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: CreateManyVotesOnPremiseArgs): Promise<AffectedRowsOutput>;
    deleteVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: DeleteVotesOnPremiseArgs): Promise<VotesOnPremise | null>;
    updateVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpdateVotesOnPremiseArgs): Promise<VotesOnPremise | null>;
    deleteManyVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVotesOnPremiseArgs): Promise<AffectedRowsOutput>;
    updateManyVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVotesOnPremiseArgs): Promise<AffectedRowsOutput>;
    upsertVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpsertVotesOnPremiseArgs): Promise<VotesOnPremise>;
    aggregateVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: AggregateVotesOnPremiseArgs): Promise<AggregateVotesOnPremise>;
    groupByVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: GroupByVotesOnPremiseArgs): Promise<VotesOnPremiseGroupBy[]>;
}