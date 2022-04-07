import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyReactionOnThreadsArgs } from "./args/FindManyReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnThreads)
export class FindManyReactionOnThreadsResolver {
  @TypeGraphQL.Query(_returns => [ReactionOnThreads], {
    nullable: false
  })
  async findManyReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyReactionOnThreadsArgs): Promise<ReactionOnThreads[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
