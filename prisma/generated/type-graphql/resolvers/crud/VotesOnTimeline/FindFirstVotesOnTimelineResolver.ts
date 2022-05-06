import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstVotesOnTimelineArgs } from "./args/FindFirstVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnTimeline)
export class FindFirstVotesOnTimelineResolver {
  @TypeGraphQL.Query(_returns => VotesOnTimeline, {
    nullable: true
  })
  async findFirstVotesOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVotesOnTimelineArgs): Promise<VotesOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnTimeline.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
