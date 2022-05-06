import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstVotesOnVisionArgs } from "./args/FindFirstVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnVision)
export class FindFirstVotesOnVisionResolver {
  @TypeGraphQL.Query(_returns => VotesOnVision, {
    nullable: true
  })
  async findFirstVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVotesOnVisionArgs): Promise<VotesOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
