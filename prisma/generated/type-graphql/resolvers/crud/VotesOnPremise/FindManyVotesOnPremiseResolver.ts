import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyVotesOnPremiseArgs } from "./args/FindManyVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnPremise)
export class FindManyVotesOnPremiseResolver {
  @TypeGraphQL.Query(_returns => [VotesOnPremise], {
    nullable: false
  })
  async votesOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVotesOnPremiseArgs): Promise<VotesOnPremise[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnPremise.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
