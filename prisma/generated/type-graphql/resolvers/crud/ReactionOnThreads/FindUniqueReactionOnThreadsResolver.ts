import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReactionOnThreadsArgs } from "./args/FindUniqueReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnThreads)
export class FindUniqueReactionOnThreadsResolver {
  @TypeGraphQL.Query(_returns => ReactionOnThreads, {
    nullable: true
  })
  async findUniqueReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueReactionOnThreadsArgs): Promise<ReactionOnThreads | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
