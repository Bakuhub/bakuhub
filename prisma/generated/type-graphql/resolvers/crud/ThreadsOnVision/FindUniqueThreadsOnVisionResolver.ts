import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThreadsOnVisionArgs } from "./args/FindUniqueThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnVision)
export class FindUniqueThreadsOnVisionResolver {
  @TypeGraphQL.Query(_returns => ThreadsOnVision, {
    nullable: true
  })
  async threadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueThreadsOnVisionArgs): Promise<ThreadsOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
