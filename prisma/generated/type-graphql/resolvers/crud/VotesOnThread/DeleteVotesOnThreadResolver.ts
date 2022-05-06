import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteVotesOnThreadArgs } from "./args/DeleteVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnThread)
export class DeleteVotesOnThreadResolver {
  @TypeGraphQL.Mutation(_returns => VotesOnThread, {
    nullable: true
  })
  async deleteVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteVotesOnThreadArgs): Promise<VotesOnThread | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
