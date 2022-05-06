import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReactionOnVisionsArgs } from "./args/FindUniqueReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnVisions)
export class FindUniqueReactionOnVisionsResolver {
  @TypeGraphQL.Query(_returns => ReactionOnVisions, {
    nullable: true
  })
  async findUniqueReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueReactionOnVisionsArgs): Promise<ReactionOnVisions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
