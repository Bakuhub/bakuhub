import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateActiveVisionOnPremiseArgs } from "./args/AggregateActiveVisionOnPremiseArgs";
import { CreateActiveVisionOnPremiseArgs } from "./args/CreateActiveVisionOnPremiseArgs";
import { CreateManyActiveVisionOnPremiseArgs } from "./args/CreateManyActiveVisionOnPremiseArgs";
import { DeleteActiveVisionOnPremiseArgs } from "./args/DeleteActiveVisionOnPremiseArgs";
import { DeleteManyActiveVisionOnPremiseArgs } from "./args/DeleteManyActiveVisionOnPremiseArgs";
import { FindFirstActiveVisionOnPremiseArgs } from "./args/FindFirstActiveVisionOnPremiseArgs";
import { FindManyActiveVisionOnPremiseArgs } from "./args/FindManyActiveVisionOnPremiseArgs";
import { FindUniqueActiveVisionOnPremiseArgs } from "./args/FindUniqueActiveVisionOnPremiseArgs";
import { GroupByActiveVisionOnPremiseArgs } from "./args/GroupByActiveVisionOnPremiseArgs";
import { UpdateActiveVisionOnPremiseArgs } from "./args/UpdateActiveVisionOnPremiseArgs";
import { UpdateManyActiveVisionOnPremiseArgs } from "./args/UpdateManyActiveVisionOnPremiseArgs";
import { UpsertActiveVisionOnPremiseArgs } from "./args/UpsertActiveVisionOnPremiseArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ActiveVisionOnPremise } from "../../../models/ActiveVisionOnPremise";
import { ActiveVisionOnPremiseGroupBy } from "../../outputs/ActiveVisionOnPremiseGroupBy";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActiveVisionOnPremise } from "../../outputs/AggregateActiveVisionOnPremise";

@TypeGraphQL.Resolver(_of => ActiveVisionOnPremise)
export class ActiveVisionOnPremiseCrudResolver {
  @TypeGraphQL.Query(_returns => ActiveVisionOnPremise, {
    nullable: true
  })
  async activeVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ActiveVisionOnPremise, {
    nullable: true
  })
  async findFirstActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ActiveVisionOnPremise], {
    nullable: false
  })
  async activeVisionOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ActiveVisionOnPremise, {
    nullable: false
  })
  async createActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyActiveVisionOnPremiseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ActiveVisionOnPremise, {
    nullable: true
  })
  async deleteActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ActiveVisionOnPremise, {
    nullable: true
  })
  async updateActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyActiveVisionOnPremiseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyActiveVisionOnPremiseArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ActiveVisionOnPremise, {
    nullable: false
  })
  async upsertActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateActiveVisionOnPremise, {
    nullable: false
  })
  async aggregateActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActiveVisionOnPremiseArgs): Promise<AggregateActiveVisionOnPremise> {
    return getPrismaFromContext(ctx).activeVisionOnPremise.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ActiveVisionOnPremiseGroupBy], {
    nullable: false
  })
  async groupByActiveVisionOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremiseGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).activeVisionOnPremise.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
