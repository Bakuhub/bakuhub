import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateReactionOnTimelinesArgs } from "./args/CreateReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnTimelines)
export class CreateReactionOnTimelinesResolver {
  @TypeGraphQL.Mutation(_returns => ReactionOnTimelines, {
    nullable: false
  })
  async createReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateReactionOnTimelinesArgs): Promise<ReactionOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
