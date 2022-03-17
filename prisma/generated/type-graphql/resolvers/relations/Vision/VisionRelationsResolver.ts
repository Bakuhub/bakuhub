import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { VisionNextVisionArgs } from "./args/VisionNextVisionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vision)
export class VisionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async author(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
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

  @TypeGraphQL.FieldResolver(_type => Vision, {
    nullable: true
  })
  async prevVision(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any): Promise<Vision | null> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).prevVision({});
  }

  @TypeGraphQL.FieldResolver(_type => [Vision], {
    nullable: false
  })
  async nextVision(@TypeGraphQL.Root() vision: Vision, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: VisionNextVisionArgs): Promise<Vision[]> {
    return getPrismaFromContext(ctx).vision.findUnique({
      where: {
        id: vision.id,
      },
    }).nextVision(args);
  }
}