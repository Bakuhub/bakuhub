import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVotesOnTimelineArgs } from "./args/FindUniqueVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnTimeline)
export class FindUniqueVotesOnTimelineResolver {
  @TypeGraphQL.Query(_returns => VotesOnTimeline, {
    nullable: true
  })
  async votesOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVotesOnTimelineArgs): Promise<VotesOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnTimeline.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
