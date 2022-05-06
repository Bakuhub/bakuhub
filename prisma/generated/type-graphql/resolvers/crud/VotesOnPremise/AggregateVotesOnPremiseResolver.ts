import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnPremiseArgs } from "./args/AggregateVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { AggregateVotesOnPremise } from "../../outputs/AggregateVotesOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnPremise)
export class AggregateVotesOnPremiseResolver {
  @TypeGraphQL.Query(_returns => AggregateVotesOnPremise, {
    nullable: false
  })
  async aggregateVotesOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVotesOnPremiseArgs): Promise<AggregateVotesOnPremise> {
    return getPrismaFromContext(ctx).votesOnPremise.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
