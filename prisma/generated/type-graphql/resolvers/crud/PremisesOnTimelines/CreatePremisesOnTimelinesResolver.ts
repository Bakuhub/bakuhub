import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreatePremisesOnTimelinesArgs } from "./args/CreatePremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PremisesOnTimelines)
export class CreatePremisesOnTimelinesResolver {
  @TypeGraphQL.Mutation(_returns => PremisesOnTimelines, {
    nullable: false
  })
  async createPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreatePremisesOnTimelinesArgs): Promise<PremisesOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
