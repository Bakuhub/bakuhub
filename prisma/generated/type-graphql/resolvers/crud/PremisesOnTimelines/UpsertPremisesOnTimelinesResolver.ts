import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertPremisesOnTimelinesArgs } from "./args/UpsertPremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PremisesOnTimelines)
export class UpsertPremisesOnTimelinesResolver {
  @TypeGraphQL.Mutation(_returns => PremisesOnTimelines, {
    nullable: false
  })
  async upsertPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertPremisesOnTimelinesArgs): Promise<PremisesOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
