import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnPremiseArgs } from "./args/AggregateThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { AggregateThreadsOnPremise } from "../../outputs/AggregateThreadsOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnPremise)
export class AggregateThreadsOnPremiseResolver {
  @TypeGraphQL.Query(_returns => AggregateThreadsOnPremise, {
    nullable: false
  })
  async aggregateThreadsOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThreadsOnPremiseArgs): Promise<AggregateThreadsOnPremise> {
    return getPrismaFromContext(ctx).threadsOnPremise.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
