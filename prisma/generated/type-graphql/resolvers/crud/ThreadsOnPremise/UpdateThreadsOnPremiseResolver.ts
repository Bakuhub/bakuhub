import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateThreadsOnPremiseArgs } from "./args/UpdateThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnPremise)
export class UpdateThreadsOnPremiseResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnPremise, {
    nullable: true
  })
  async updateThreadsOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateThreadsOnPremiseArgs): Promise<ThreadsOnPremise | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnPremise.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
