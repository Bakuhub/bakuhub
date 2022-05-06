import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteSubscriptionsOnPremisesArgs } from "./args/DeleteSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscriptionsOnPremises)
export class DeleteSubscriptionsOnPremisesResolver {
  @TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises, {
    nullable: true
  })
  async deleteSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
