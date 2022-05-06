import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteReactionOnTimelinesArgs } from "./args/DeleteReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnTimelines)
export class DeleteReactionOnTimelinesResolver {
  @TypeGraphQL.Mutation(_returns => ReactionOnTimelines, {
    nullable: true
  })
  async deleteReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
