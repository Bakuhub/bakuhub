import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateVotesOnTimelineArgs } from "./args/UpdateVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnTimeline)
export class UpdateVotesOnTimelineResolver {
  @TypeGraphQL.Mutation(_returns => VotesOnTimeline, {
    nullable: true
  })
  async updateVotesOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateVotesOnTimelineArgs): Promise<VotesOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnTimeline.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
