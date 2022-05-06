import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnVisionArgs } from "./args/AggregateVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
import { AggregateVotesOnVision } from "../../outputs/AggregateVotesOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnVision)
export class AggregateVotesOnVisionResolver {
  @TypeGraphQL.Query(_returns => AggregateVotesOnVision, {
    nullable: false
  })
  async aggregateVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVotesOnVisionArgs): Promise<AggregateVotesOnVision> {
    return getPrismaFromContext(ctx).votesOnVision.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
