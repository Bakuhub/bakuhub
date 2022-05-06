import * as TypeGraphQL from "type-graphql";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnVisions)
export class ReactionOnVisionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() reactionOnVisions: ReactionOnVisions, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).reactionOnVisions.findUnique({
      where: {
        userId_visionId: {
          userId: reactionOnVisions.userId,
          visionId: reactionOnVisions.visionId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Vision, {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() reactionOnVisions: ReactionOnVisions, @TypeGraphQL.Ctx() ctx: any): Promise<Vision> {
    return getPrismaFromContext(ctx).reactionOnVisions.findUnique({
      where: {
        userId_visionId: {
          userId: reactionOnVisions.userId,
          visionId: reactionOnVisions.visionId,
        },
      },
    }).vision({});
  }
}
