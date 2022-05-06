import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateVotesOnThreadArgs } from "./args/UpdateVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnThread)
export class UpdateVotesOnThreadResolver {
  @TypeGraphQL.Mutation(_returns => VotesOnThread, {
    nullable: true
  })
  async updateVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateVotesOnThreadArgs): Promise<VotesOnThread | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
