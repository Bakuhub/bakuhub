import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTagsOnTimelinesArgs } from "./args/AggregateTagsOnTimelinesArgs";
import { CreateManyTagsOnTimelinesArgs } from "./args/CreateManyTagsOnTimelinesArgs";
import { CreateTagsOnTimelinesArgs } from "./args/CreateTagsOnTimelinesArgs";
import { DeleteManyTagsOnTimelinesArgs } from "./args/DeleteManyTagsOnTimelinesArgs";
import { DeleteTagsOnTimelinesArgs } from "./args/DeleteTagsOnTimelinesArgs";
import { FindFirstTagsOnTimelinesArgs } from "./args/FindFirstTagsOnTimelinesArgs";
import { FindManyTagsOnTimelinesArgs } from "./args/FindManyTagsOnTimelinesArgs";
import { FindUniqueTagsOnTimelinesArgs } from "./args/FindUniqueTagsOnTimelinesArgs";
import { GroupByTagsOnTimelinesArgs } from "./args/GroupByTagsOnTimelinesArgs";
import { UpdateManyTagsOnTimelinesArgs } from "./args/UpdateManyTagsOnTimelinesArgs";
import { UpdateTagsOnTimelinesArgs } from "./args/UpdateTagsOnTimelinesArgs";
import { UpsertTagsOnTimelinesArgs } from "./args/UpsertTagsOnTimelinesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTagsOnTimelines } from "../../outputs/AggregateTagsOnTimelines";
import { TagsOnTimelinesGroupBy } from "../../outputs/TagsOnTimelinesGroupBy";

@TypeGraphQL.Resolver(_of => TagsOnTimelines)
export class TagsOnTimelinesCrudResolver {
  @TypeGraphQL.Query(_returns => TagsOnTimelines, {
    nullable: true
  })
  async findUniqueTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTagsOnTimelinesArgs): Promise<TagsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TagsOnTimelines, {
    nullable: true
  })
  async findFirstTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTagsOnTimelinesArgs): Promise<TagsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TagsOnTimelines], {
    nullable: false
  })
  async findManyTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTagsOnTimelinesArgs): Promise<TagsOnTimelines[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnTimelines, {
    nullable: false
  })
  async createTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTagsOnTimelinesArgs): Promise<TagsOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTagsOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnTimelines, {
    nullable: true
  })
  async deleteTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTagsOnTimelinesArgs): Promise<TagsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnTimelines, {
    nullable: true
  })
  async updateTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTagsOnTimelinesArgs): Promise<TagsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTagsOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTagsOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnTimelines, {
    nullable: false
  })
  async upsertTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTagsOnTimelinesArgs): Promise<TagsOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateTagsOnTimelines, {
    nullable: false
  })
  async aggregateTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagsOnTimelinesArgs): Promise<AggregateTagsOnTimelines> {
    return getPrismaFromContext(ctx).tagsOnTimelines.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [TagsOnTimelinesGroupBy], {
    nullable: false
  })
  async groupByTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTagsOnTimelinesArgs): Promise<TagsOnTimelinesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
