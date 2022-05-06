import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateThreadsOnTimelineArgs } from "./args/CreateThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnTimeline)
export class CreateThreadsOnTimelineResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnTimeline, {
    nullable: false
  })
  async createThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateThreadsOnTimelineArgs): Promise<ThreadsOnTimeline> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
