import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Premise } from "../../../models/Premise";
import { ReactionOnThread } from "../../../models/ReactionOnThread";
import { ReactionOnTimeline } from "../../../models/ReactionOnTimeline";
import { ReactionOnVision } from "../../../models/ReactionOnVision";
import { Session } from "../../../models/Session";
import { Thread } from "../../../models/Thread";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserPremisesArgs } from "./args/UserPremisesArgs";
import { UserReactionOnThreadArgs } from "./args/UserReactionOnThreadArgs";
import { UserReactionOnTimelineArgs } from "./args/UserReactionOnTimelineArgs";
import { UserReactionOnVisionArgs } from "./args/UserReactionOnVisionArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
import { UserThreadsArgs } from "./args/UserThreadsArgs";
import { UserTimelinesArgs } from "./args/UserTimelinesArgs";
import { UserVisionsArgs } from "./args/UserVisionsArgs";
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
  async premises(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPremisesArgs): Promise<Premise[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).premises(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Thread], {
    nullable: false
  })
  async threads(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserThreadsArgs): Promise<Thread[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).threads(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Vision], {
    nullable: false
  })
  async visions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserVisionsArgs): Promise<Vision[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).visions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Timeline], {
    nullable: false
  })
  async timelines(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTimelinesArgs): Promise<Timeline[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).timelines(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnThread], {
    nullable: false
  })
  async ReactionOnThread(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReactionOnThreadArgs): Promise<ReactionOnThread[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ReactionOnThread(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnTimeline], {
    nullable: false
  })
  async ReactionOnTimeline(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReactionOnTimelineArgs): Promise<ReactionOnTimeline[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ReactionOnTimeline(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnVision], {
    nullable: false
  })
  async ReactionOnVision(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReactionOnVisionArgs): Promise<ReactionOnVision[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ReactionOnVision(args);
  }
}
