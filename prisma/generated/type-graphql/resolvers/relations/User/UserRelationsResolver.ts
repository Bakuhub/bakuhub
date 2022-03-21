import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Premise } from "../../../models/Premise";
import { Session } from "../../../models/Session";
import { Thread } from "../../../models/Thread";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserPremiseArgs } from "./args/UserPremiseArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
import { UserThreadArgs } from "./args/UserThreadArgs";
import { UserTimelineArgs } from "./args/UserTimelineArgs";
import { UserVisionArgs } from "./args/UserVisionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Account], {
    nullable: false
  })
  async accounts(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserAccountsArgs): Promise<Account[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).accounts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Session], {
    nullable: false
  })
  async sessions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSessionsArgs): Promise<Session[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).sessions(args);
  }

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

  @TypeGraphQL.FieldResolver(_type => [Thread], {
    nullable: false
  })
  async thread(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserThreadArgs): Promise<Thread[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).thread(args);
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
