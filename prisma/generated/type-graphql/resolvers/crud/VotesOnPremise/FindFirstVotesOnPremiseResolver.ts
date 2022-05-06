import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstVotesOnPremiseArgs } from "./args/FindFirstVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnPremise)
export class FindFirstVotesOnPremiseResolver {
  @TypeGraphQL.Query(_returns => VotesOnPremise, {
    nullable: true
  })
  async findFirstVotesOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVotesOnPremiseArgs): Promise<VotesOnPremise | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnPremise.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
