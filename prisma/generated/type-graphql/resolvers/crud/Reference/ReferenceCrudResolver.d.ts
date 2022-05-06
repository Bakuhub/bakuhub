import { GraphQLResolveInfo } from "graphql";
import { AggregateReferenceArgs } from "./args/AggregateReferenceArgs";
import { CreateManyReferenceArgs } from "./args/CreateManyReferenceArgs";
import { CreateReferenceArgs } from "./args/CreateReferenceArgs";
import { DeleteManyReferenceArgs } from "./args/DeleteManyReferenceArgs";
import { DeleteReferenceArgs } from "./args/DeleteReferenceArgs";
import { FindFirstReferenceArgs } from "./args/FindFirstReferenceArgs";
import { FindManyReferenceArgs } from "./args/FindManyReferenceArgs";
import { FindUniqueReferenceArgs } from "./args/FindUniqueReferenceArgs";
import { GroupByReferenceArgs } from "./args/GroupByReferenceArgs";
import { UpdateManyReferenceArgs } from "./args/UpdateManyReferenceArgs";
import { UpdateReferenceArgs } from "./args/UpdateReferenceArgs";
import { UpsertReferenceArgs } from "./args/UpsertReferenceArgs";
import { Reference } from "../../../models/Reference";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReference } from "../../outputs/AggregateReference";
import { ReferenceGroupBy } from "../../outputs/ReferenceGroupBy";
export declare class ReferenceCrudResolver {
    reference(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReferenceArgs): Promise<Reference | null>;
    findFirstReference(ctx: any, info: GraphQLResolveInfo, args: FindFirstReferenceArgs): Promise<Reference | null>;
    references(ctx: any, info: GraphQLResolveInfo, args: FindManyReferenceArgs): Promise<Reference[]>;
    createReference(ctx: any, info: GraphQLResolveInfo, args: CreateReferenceArgs): Promise<Reference>;
    createManyReference(ctx: any, info: GraphQLResolveInfo, args: CreateManyReferenceArgs): Promise<AffectedRowsOutput>;
    deleteReference(ctx: any, info: GraphQLResolveInfo, args: DeleteReferenceArgs): Promise<Reference | null>;
    updateReference(ctx: any, info: GraphQLResolveInfo, args: UpdateReferenceArgs): Promise<Reference | null>;
    deleteManyReference(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReferenceArgs): Promise<AffectedRowsOutput>;
    updateManyReference(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReferenceArgs): Promise<AffectedRowsOutput>;
    upsertReference(ctx: any, info: GraphQLResolveInfo, args: UpsertReferenceArgs): Promise<Reference>;
    aggregateReference(ctx: any, info: GraphQLResolveInfo, args: AggregateReferenceArgs): Promise<AggregateReference>;
    groupByReference(ctx: any, info: GraphQLResolveInfo, args: GroupByReferenceArgs): Promise<ReferenceGroupBy[]>;
}
