import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateReactionOnThreadsArgs } from "./args/UpdateReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnThreads)
export class UpdateReactionOnThreadsResolver {
  @TypeGraphQL.Mutation(_returns => ReactionOnThreads, {
    nullable: true
  })
  async updateReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateReactionOnThreadsArgs): Promise<ReactionOnThreads | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
