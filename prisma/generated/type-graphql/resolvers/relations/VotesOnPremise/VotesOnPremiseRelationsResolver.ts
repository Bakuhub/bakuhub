import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { User } from "../../../models/User";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnPremise)
export class VotesOnPremiseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() votesOnPremise: VotesOnPremise, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).votesOnPremise.findUnique({
      where: {
        userId_premiseId: {
          userId: votesOnPremise.userId,
          premiseId: votesOnPremise.premiseId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() votesOnPremise: VotesOnPremise, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).votesOnPremise.findUnique({
      where: {
        userId_premiseId: {
          userId: votesOnPremise.userId,
          premiseId: votesOnPremise.premiseId,
        },
      },
    }).premise({});
  }
}
