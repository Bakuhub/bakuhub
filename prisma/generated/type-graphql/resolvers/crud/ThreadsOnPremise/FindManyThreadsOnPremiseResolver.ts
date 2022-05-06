import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyThreadsOnPremiseArgs } from "./args/FindManyThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnPremise)
export class FindManyThreadsOnPremiseResolver {
  @TypeGraphQL.Query(_returns => [ThreadsOnPremise], {
    nullable: false
  })
  async threadsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyThreadsOnPremiseArgs): Promise<ThreadsOnPremise[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnPremise.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
