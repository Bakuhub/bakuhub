import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteThreadsOnPremiseArgs } from "./args/DeleteThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnPremise)
export class DeleteThreadsOnPremiseResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnPremise, {
    nullable: true
  })
  async deleteThreadsOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteThreadsOnPremiseArgs): Promise<ThreadsOnPremise | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnPremise.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
