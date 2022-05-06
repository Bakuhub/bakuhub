import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnVisionArgs } from "./args/AggregateThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { AggregateThreadsOnVision } from "../../outputs/AggregateThreadsOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnVision)
export class AggregateThreadsOnVisionResolver {
  @TypeGraphQL.Query(_returns => AggregateThreadsOnVision, {
    nullable: false
  })
  async aggregateThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThreadsOnVisionArgs): Promise<AggregateThreadsOnVision> {
    return getPrismaFromContext(ctx).threadsOnVision.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
