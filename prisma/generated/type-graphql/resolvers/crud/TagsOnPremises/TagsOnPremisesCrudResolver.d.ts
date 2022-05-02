import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnPremisesArgs } from "./args/AggregateTagsOnPremisesArgs";
import { CreateManyTagsOnPremisesArgs } from "./args/CreateManyTagsOnPremisesArgs";
import { CreateTagsOnPremisesArgs } from "./args/CreateTagsOnPremisesArgs";
import { DeleteManyTagsOnPremisesArgs } from "./args/DeleteManyTagsOnPremisesArgs";
import { DeleteTagsOnPremisesArgs } from "./args/DeleteTagsOnPremisesArgs";
import { FindFirstTagsOnPremisesArgs } from "./args/FindFirstTagsOnPremisesArgs";
import { FindManyTagsOnPremisesArgs } from "./args/FindManyTagsOnPremisesArgs";
import { FindUniqueTagsOnPremisesArgs } from "./args/FindUniqueTagsOnPremisesArgs";
import { GroupByTagsOnPremisesArgs } from "./args/GroupByTagsOnPremisesArgs";
import { UpdateManyTagsOnPremisesArgs } from "./args/UpdateManyTagsOnPremisesArgs";
import { UpdateTagsOnPremisesArgs } from "./args/UpdateTagsOnPremisesArgs";
import { UpsertTagsOnPremisesArgs } from "./args/UpsertTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTagsOnPremises } from "../../outputs/AggregateTagsOnPremises";
import { TagsOnPremisesGroupBy } from "../../outputs/TagsOnPremisesGroupBy";
export declare class TagsOnPremisesCrudResolver {
    findUniqueTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagsOnPremisesArgs): Promise<TagsOnPremises | null>;
    findFirstTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagsOnPremisesArgs): Promise<TagsOnPremises | null>;
    findManyTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindManyTagsOnPremisesArgs): Promise<TagsOnPremises[]>;
    createTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: CreateTagsOnPremisesArgs): Promise<TagsOnPremises>;
    createManyTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: CreateManyTagsOnPremisesArgs): Promise<AffectedRowsOutput>;
    deleteTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: DeleteTagsOnPremisesArgs): Promise<TagsOnPremises | null>;
    updateTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpdateTagsOnPremisesArgs): Promise<TagsOnPremises | null>;
    deleteManyTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTagsOnPremisesArgs): Promise<AffectedRowsOutput>;
    updateManyTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTagsOnPremisesArgs): Promise<AffectedRowsOutput>;
    upsertTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpsertTagsOnPremisesArgs): Promise<TagsOnPremises>;
    aggregateTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: AggregateTagsOnPremisesArgs): Promise<AggregateTagsOnPremises>;
    groupByTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: GroupByTagsOnPremisesArgs): Promise<TagsOnPremisesGroupBy[]>;
}