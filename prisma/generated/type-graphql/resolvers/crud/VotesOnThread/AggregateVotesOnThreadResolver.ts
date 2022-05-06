import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnThreadArgs } from "./args/AggregateVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
import { AggregateVotesOnThread } from "../../outputs/AggregateVotesOnThread";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnThread)
export class AggregateVotesOnThreadResolver {
  @TypeGraphQL.Query(_returns => AggregateVotesOnThread, {
    nullable: false
  })
  async aggregateVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVotesOnThreadArgs): Promise<AggregateVotesOnThread> {
    return getPrismaFromContext(ctx).votesOnThread.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
