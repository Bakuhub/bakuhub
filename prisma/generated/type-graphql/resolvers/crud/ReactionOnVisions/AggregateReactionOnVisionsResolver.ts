import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnVisionsArgs } from "./args/AggregateReactionOnVisionsArgs";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
import { AggregateReactionOnVisions } from "../../outputs/AggregateReactionOnVisions";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnVisions)
export class AggregateReactionOnVisionsResolver {
  @TypeGraphQL.Query(_returns => AggregateReactionOnVisions, {
    nullable: false
  })
  async aggregateReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReactionOnVisionsArgs): Promise<AggregateReactionOnVisions> {
    return getPrismaFromContext(ctx).reactionOnVisions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
