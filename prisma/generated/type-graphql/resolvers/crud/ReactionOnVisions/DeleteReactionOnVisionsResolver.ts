import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteReactionOnVisionsArgs } from "./args/DeleteReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnVisions)
export class DeleteReactionOnVisionsResolver {
  @TypeGraphQL.Mutation(_returns => ReactionOnVisions, {
    nullable: true
  })
  async deleteReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteReactionOnVisionsArgs): Promise<ReactionOnVisions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
