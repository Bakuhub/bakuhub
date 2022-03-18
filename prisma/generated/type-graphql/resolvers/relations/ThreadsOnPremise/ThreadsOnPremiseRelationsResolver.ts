import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { Thread } from "../../../models/Thread";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnPremise)
export class ThreadsOnPremiseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Thread, {
    nullable: false
  })
  async thread(@TypeGraphQL.Root() threadsOnPremise: ThreadsOnPremise, @TypeGraphQL.Ctx() ctx: any): Promise<Thread> {
    return getPrismaFromContext(ctx).threadsOnPremise.findUnique({
      where: {
        threadId: threadsOnPremise.threadId,
      },
    }).thread({});
  }

  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() threadsOnPremise: ThreadsOnPremise, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).threadsOnPremise.findUnique({
      where: {
        threadId: threadsOnPremise.threadId,
      },
    }).premise({});
  }
}
