import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateThreadsOnVisionArgs } from "./args/CreateThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnVision)
export class CreateThreadsOnVisionResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnVision, {
    nullable: false
  })
  async createThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateThreadsOnVisionArgs): Promise<ThreadsOnVision> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
