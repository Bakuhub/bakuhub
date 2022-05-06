import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertVotesOnPremiseArgs } from "./args/UpsertVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnPremise)
export class UpsertVotesOnPremiseResolver {
  @TypeGraphQL.Mutation(_returns => VotesOnPremise, {
    nullable: false
  })
  async upsertVotesOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertVotesOnPremiseArgs): Promise<VotesOnPremise> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnPremise.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
