import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertVotesOnVisionArgs } from "./args/UpsertVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnVision)
export class UpsertVotesOnVisionResolver {
  @TypeGraphQL.Mutation(_returns => VotesOnVision, {
    nullable: false
  })
  async upsertVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertVotesOnVisionArgs): Promise<VotesOnVision> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
