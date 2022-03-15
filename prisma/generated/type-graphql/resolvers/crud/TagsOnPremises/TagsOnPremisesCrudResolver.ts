import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
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
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTagsOnPremises } from "../../outputs/AggregateTagsOnPremises";
import { TagsOnPremisesGroupBy } from "../../outputs/TagsOnPremisesGroupBy";

@TypeGraphQL.Resolver(_of => TagsOnPremises)
export class TagsOnPremisesCrudResolver {
  @TypeGraphQL.Query(_returns => TagsOnPremises, {
    nullable: true
  })
  async findUniqueTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTagsOnPremisesArgs): Promise<TagsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TagsOnPremises, {
    nullable: true
  })
  async findFirstTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTagsOnPremisesArgs): Promise<TagsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TagsOnPremises], {
    nullable: false
  })
  async findManyTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTagsOnPremisesArgs): Promise<TagsOnPremises[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnPremises, {
    nullable: false
  })
  async createTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTagsOnPremisesArgs): Promise<TagsOnPremises> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTagsOnPremisesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnPremises, {
    nullable: true
  })
  async deleteTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTagsOnPremisesArgs): Promise<TagsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnPremises, {
    nullable: true
  })
  async updateTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTagsOnPremisesArgs): Promise<TagsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTagsOnPremisesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTagsOnPremisesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TagsOnPremises, {
    nullable: false
  })
  async upsertTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTagsOnPremisesArgs): Promise<TagsOnPremises> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateTagsOnPremises, {
    nullable: false
  })
  async aggregateTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTagsOnPremisesArgs): Promise<AggregateTagsOnPremises> {
    return getPrismaFromContext(ctx).tagsOnPremises.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [TagsOnPremisesGroupBy], {
    nullable: false
  })
  async groupByTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTagsOnPremisesArgs): Promise<TagsOnPremisesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
