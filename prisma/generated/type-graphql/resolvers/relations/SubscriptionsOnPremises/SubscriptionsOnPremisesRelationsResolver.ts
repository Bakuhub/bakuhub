import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscriptionsOnPremises)
export class SubscriptionsOnPremisesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() subscriptionsOnPremises: SubscriptionsOnPremises, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).subscriptionsOnPremises.findUnique({
      where: {
        userId_premiseId: {
          userId: subscriptionsOnPremises.userId,
          premiseId: subscriptionsOnPremises.premiseId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() subscriptionsOnPremises: SubscriptionsOnPremises, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).subscriptionsOnPremises.findUnique({
      where: {
        userId_premiseId: {
          userId: subscriptionsOnPremises.userId,
          premiseId: subscriptionsOnPremises.premiseId,
        },
      },
    }).premise({});
  }
}
