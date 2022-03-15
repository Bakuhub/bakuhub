import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { Thread } from "../../../models/Thread";
import { ThreadChildThreadsArgs } from "./args/ThreadChildThreadsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Thread)
export class ThreadRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).premise({});
  }

  @TypeGraphQL.FieldResolver(_type => Thread, {
    nullable: true
  })
  async parentThread(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any): Promise<Thread | null> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).parentThread({});
  }

  @TypeGraphQL.FieldResolver(_type => [Thread], {
    nullable: false
  })
  async childThreads(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ThreadChildThreadsArgs): Promise<Thread[]> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).childThreads(args);
  }
}
