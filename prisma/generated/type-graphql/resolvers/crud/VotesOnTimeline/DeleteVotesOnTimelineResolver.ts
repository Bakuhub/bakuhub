import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteVotesOnTimelineArgs } from "./args/DeleteVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnTimeline)
export class DeleteVotesOnTimelineResolver {
  @TypeGraphQL.Mutation(_returns => VotesOnTimeline, {
    nullable: true
  })
  async deleteVotesOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteVotesOnTimelineArgs): Promise<VotesOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnTimeline.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
