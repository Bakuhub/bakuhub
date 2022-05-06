import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateThreadsOnTimelineArgs } from "./args/UpdateThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnTimeline)
export class UpdateThreadsOnTimelineResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnTimeline, {
    nullable: true
  })
  async updateThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
