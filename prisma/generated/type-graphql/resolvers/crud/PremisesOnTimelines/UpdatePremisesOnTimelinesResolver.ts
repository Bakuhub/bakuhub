import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdatePremisesOnTimelinesArgs } from "./args/UpdatePremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PremisesOnTimelines)
export class UpdatePremisesOnTimelinesResolver {
  @TypeGraphQL.Mutation(_returns => PremisesOnTimelines, {
    nullable: true
  })
  async updatePremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdatePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
