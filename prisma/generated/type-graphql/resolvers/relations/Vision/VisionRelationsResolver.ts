import * as TypeGraphQL from "type-graphql";
import { ActiveVisionOnPremise } from "../../../models/ActiveVisionOnPremise";
import { Premise } from "../../../models/Premise";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { VisionActiveVisionOnPremiseArgs } from "./args/VisionActiveVisionOnPremiseArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vision)
export class VisionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).premise({});
  }

  @TypeGraphQL.FieldResolver(_type => [ActiveVisionOnPremise], {
    nullable: false
  })
  async activeVisionOnPremise(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: VisionActiveVisionOnPremiseArgs): Promise<ActiveVisionOnPremise[]> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).activeVisionOnPremise(args);
  }
}
