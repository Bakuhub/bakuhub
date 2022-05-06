import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyThreadsOnVisionArgs } from "./args/FindManyThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnVision)
export class FindManyThreadsOnVisionResolver {
  @TypeGraphQL.Query(_returns => [ThreadsOnVision], {
    nullable: false
  })
  async threadsOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyThreadsOnVisionArgs): Promise<ThreadsOnVision[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
