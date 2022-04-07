import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertReactionOnThreadsArgs } from "./args/UpsertReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnThreads)
export class UpsertReactionOnThreadsResolver {
  @TypeGraphQL.Mutation(_returns => ReactionOnThreads, {
    nullable: false
  })
  async upsertReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertReactionOnThreadsArgs): Promise<ReactionOnThreads> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
