import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateVotesOnPremiseArgs } from "./args/CreateVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnPremise)
export class CreateVotesOnPremiseResolver {
  @TypeGraphQL.Mutation(_returns => VotesOnPremise, {
    nullable: false
  })
  async createVotesOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateVotesOnPremiseArgs): Promise<VotesOnPremise> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnPremise.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
