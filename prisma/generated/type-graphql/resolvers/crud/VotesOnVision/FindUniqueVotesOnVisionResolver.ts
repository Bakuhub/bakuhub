import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVotesOnVisionArgs } from "./args/FindUniqueVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnVision)
export class FindUniqueVotesOnVisionResolver {
  @TypeGraphQL.Query(_returns => VotesOnVision, {
    nullable: true
  })
  async votesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVotesOnVisionArgs): Promise<VotesOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
