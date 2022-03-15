import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { UserPremiseArgs } from "./args/UserPremiseArgs";
import { UserTimelineArgs } from "./args/UserTimelineArgs";
import { UserVisionArgs } from "./args/UserVisionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Premise], {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPremiseArgs): Promise<Premise[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).premise(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Vision], {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserVisionArgs): Promise<Vision[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).vision(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Timeline], {
    nullable: false
  })
  async timeline(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTimelineArgs): Promise<Timeline[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).timeline(args);
  }
}
