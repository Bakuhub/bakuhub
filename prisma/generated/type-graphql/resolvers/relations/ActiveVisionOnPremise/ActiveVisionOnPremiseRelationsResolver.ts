import * as TypeGraphQL from "type-graphql";
import { ActiveVisionOnPremise } from "../../../models/ActiveVisionOnPremise";
import { Premise } from "../../../models/Premise";
import { Vision } from "../../../models/Vision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActiveVisionOnPremise)
export class ActiveVisionOnPremiseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() activeVisionOnPremise: ActiveVisionOnPremise, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).activeVisionOnPremise.findUnique({
      where: {
        premiseId: activeVisionOnPremise.premiseId,
      },
    }).premise({});
  }

  @TypeGraphQL.FieldResolver(_type => Vision, {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() activeVisionOnPremise: ActiveVisionOnPremise, @TypeGraphQL.Ctx() ctx: any): Promise<Vision> {
    return getPrismaFromContext(ctx).activeVisionOnPremise.findUnique({
      where: {
        premiseId: activeVisionOnPremise.premiseId,
      },
    }).vision({});
  }
}
