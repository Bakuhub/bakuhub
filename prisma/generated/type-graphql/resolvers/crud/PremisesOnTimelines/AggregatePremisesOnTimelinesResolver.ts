import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePremisesOnTimelinesArgs } from "./args/AggregatePremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { AggregatePremisesOnTimelines } from "../../outputs/AggregatePremisesOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PremisesOnTimelines)
export class AggregatePremisesOnTimelinesResolver {
  @TypeGraphQL.Query(_returns => AggregatePremisesOnTimelines, {
    nullable: false
  })
  async aggregatePremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePremisesOnTimelinesArgs): Promise<AggregatePremisesOnTimelines> {
    return getPrismaFromContext(ctx).premisesOnTimelines.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
