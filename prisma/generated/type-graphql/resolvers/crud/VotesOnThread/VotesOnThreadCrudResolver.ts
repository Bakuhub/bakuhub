import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnThreadArgs } from "./args/AggregateVotesOnThreadArgs";
import { CreateManyVotesOnThreadArgs } from "./args/CreateManyVotesOnThreadArgs";
import { CreateVotesOnThreadArgs } from "./args/CreateVotesOnThreadArgs";
import { DeleteManyVotesOnThreadArgs } from "./args/DeleteManyVotesOnThreadArgs";
import { DeleteVotesOnThreadArgs } from "./args/DeleteVotesOnThreadArgs";
import { FindFirstVotesOnThreadArgs } from "./args/FindFirstVotesOnThreadArgs";
import { FindManyVotesOnThreadArgs } from "./args/FindManyVotesOnThreadArgs";
import { FindUniqueVotesOnThreadArgs } from "./args/FindUniqueVotesOnThreadArgs";
import { GroupByVotesOnThreadArgs } from "./args/GroupByVotesOnThreadArgs";
import { UpdateManyVotesOnThreadArgs } from "./args/UpdateManyVotesOnThreadArgs";
import { UpdateVotesOnThreadArgs } from "./args/UpdateVotesOnThreadArgs";
import { UpsertVotesOnThreadArgs } from "./args/UpsertVotesOnThreadArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VotesOnThread } from "../../../models/VotesOnThread";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVotesOnThread } from "../../outputs/AggregateVotesOnThread";
import { VotesOnThreadGroupBy } from "../../outputs/VotesOnThreadGroupBy";

@TypeGraphQL.Resolver(_of => VotesOnThread)
export class VotesOnThreadCrudResolver {
  @TypeGraphQL.Query(_returns => VotesOnThread, {
    nullable: true
  })
  async votesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVotesOnThreadArgs): Promise<VotesOnThread | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VotesOnThread, {
    nullable: true
  })
  async findFirstVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVotesOnThreadArgs): Promise<VotesOnThread | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VotesOnThread], {
    nullable: false
  })
  async votesOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVotesOnThreadArgs): Promise<VotesOnThread[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VotesOnThread, {
    nullable: false
  })
  async createVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateVotesOnThreadArgs): Promise<VotesOnThread> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyVotesOnThreadArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VotesOnThread, {
    nullable: true
  })
  async deleteVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteVotesOnThreadArgs): Promise<VotesOnThread | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VotesOnThread, {
    nullable: true
  })
  async updateVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateVotesOnThreadArgs): Promise<VotesOnThread | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyVotesOnThreadArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyVotesOnThreadArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VotesOnThread, {
    nullable: false
  })
  async upsertVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertVotesOnThreadArgs): Promise<VotesOnThread> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateVotesOnThread, {
    nullable: false
  })
  async aggregateVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVotesOnThreadArgs): Promise<AggregateVotesOnThread> {
    return getPrismaFromContext(ctx).votesOnThread.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [VotesOnThreadGroupBy], {
    nullable: false
  })
  async groupByVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVotesOnThreadArgs): Promise<VotesOnThreadGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
