import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManySubscriptionsOnTimelinesArgs } from "./args/FindManySubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines)
export class FindManySubscriptionsOnTimelinesResolver {
  @TypeGraphQL.Query(_returns => [SubscriptionsOnTimelines], {
    nullable: false
  })
  async findManySubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
