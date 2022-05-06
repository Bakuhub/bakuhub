import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateThreadsOnPremiseArgs } from "./args/CreateThreadsOnPremiseArgs";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnPremise)
export class CreateThreadsOnPremiseResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnPremise, {
    nullable: false
  })
  async createThreadsOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateThreadsOnPremiseArgs): Promise<ThreadsOnPremise> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnPremise.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
