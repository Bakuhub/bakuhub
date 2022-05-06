import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThreadsOnTimelineArgs } from "./args/FindUniqueThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnTimeline)
export class FindUniqueThreadsOnTimelineResolver {
  @TypeGraphQL.Query(_returns => ThreadsOnTimeline, {
    nullable: true
  })
  async threadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
