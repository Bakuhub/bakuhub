import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { VotesOnVision } from "../../../models/VotesOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnVision)
export class VotesOnVisionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() votesOnVision: VotesOnVision, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).votesOnVision.findUnique({
      where: {
        userId_visionId: {
          userId: votesOnVision.userId,
          visionId: votesOnVision.visionId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Vision, {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() votesOnVision: VotesOnVision, @TypeGraphQL.Ctx() ctx: any): Promise<Vision> {
    return getPrismaFromContext(ctx).votesOnVision.findUnique({
      where: {
        userId_visionId: {
          userId: votesOnVision.userId,
          visionId: votesOnVision.visionId,
        },
      },
    }).vision({});
  }
}
