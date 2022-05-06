import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstReactionOnTimelinesArgs } from "./args/FindFirstReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnTimelines)
export class FindFirstReactionOnTimelinesResolver {
  @TypeGraphQL.Query(_returns => ReactionOnTimelines, {
    nullable: true
  })
  async findFirstReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
