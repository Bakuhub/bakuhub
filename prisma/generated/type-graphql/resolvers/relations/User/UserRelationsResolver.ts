import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { Premise } from "../../../models/Premise";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
import { Session } from "../../../models/Session";
import { Thread } from "../../../models/Thread";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserPremisesArgs } from "./args/UserPremisesArgs";
import { UserReactionOnThreadsArgs } from "./args/UserReactionOnThreadsArgs";
import { UserReactionOnTimelinesArgs } from "./args/UserReactionOnTimelinesArgs";
import { UserReactionOnVisionsArgs } from "./args/UserReactionOnVisionsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [ReactionOnThreads], {
    nullable: false
  })
  async ReactionOnThreads(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReactionOnThreadsArgs): Promise<ReactionOnThreads[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ReactionOnThreads(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnTimelines], {
    nullable: false
  })
  async ReactionOnTimelines(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReactionOnTimelinesArgs): Promise<ReactionOnTimelines[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ReactionOnTimelines(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnVisions], {
    nullable: false
  })
  async ReactionOnVisions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReactionOnVisionsArgs): Promise<ReactionOnVisions[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).ReactionOnVisions(args);
  }
}
