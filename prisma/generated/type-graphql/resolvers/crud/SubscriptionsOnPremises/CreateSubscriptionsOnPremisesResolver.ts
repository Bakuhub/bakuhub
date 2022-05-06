import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateSubscriptionsOnPremisesArgs } from "./args/CreateSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscriptionsOnPremises)
export class CreateSubscriptionsOnPremisesResolver {
  @TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises, {
    nullable: false
  })
  async createSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
