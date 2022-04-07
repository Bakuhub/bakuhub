import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnMergeRequestArgs } from "./args/AggregateThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { AggregateThreadsOnMergeRequest } from "../../outputs/AggregateThreadsOnMergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest)
export class AggregateThreadsOnMergeRequestResolver {
  @TypeGraphQL.Query(_returns => AggregateThreadsOnMergeRequest, {
    nullable: false
  })
  async aggregateThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThreadsOnMergeRequestArgs): Promise<AggregateThreadsOnMergeRequest> {
    return getPrismaFromContext(ctx).threadsOnMergeRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
