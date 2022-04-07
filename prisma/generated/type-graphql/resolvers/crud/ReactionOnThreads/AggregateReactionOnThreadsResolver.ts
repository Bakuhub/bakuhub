import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnThreadsArgs } from "./args/AggregateReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { AggregateReactionOnThreads } from "../../outputs/AggregateReactionOnThreads";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnThreads)
export class AggregateReactionOnThreadsResolver {
  @TypeGraphQL.Query(_returns => AggregateReactionOnThreads, {
    nullable: false
  })
  async aggregateReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReactionOnThreadsArgs): Promise<AggregateReactionOnThreads> {
    return getPrismaFromContext(ctx).reactionOnThreads.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
