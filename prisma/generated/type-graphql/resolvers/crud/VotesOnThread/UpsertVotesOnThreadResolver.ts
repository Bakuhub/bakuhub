import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertVotesOnThreadArgs } from "./args/UpsertVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnThread)
export class UpsertVotesOnThreadResolver {
  @TypeGraphQL.Mutation(_returns => VotesOnThread, {
    nullable: false
  })
  async upsertVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertVotesOnThreadArgs): Promise<VotesOnThread> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
