import * as TypeGraphQL from "type-graphql";
import { Premise } from "../../../models/Premise";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { Timeline } from "../../../models/Timeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PremisesOnTimelines)
export class PremisesOnTimelinesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Timeline, {
    nullable: false
  })
  async timeline(@TypeGraphQL.Root() premisesOnTimelines: PremisesOnTimelines, @TypeGraphQL.Ctx() ctx: any): Promise<Timeline> {
    return getPrismaFromContext(ctx).premisesOnTimelines.findUnique({
      where: {
        premiseId_timelineId: {
          premiseId: premisesOnTimelines.premiseId,
          timelineId: premisesOnTimelines.timelineId,
        },
      },
    }).timeline({});
  }

  @TypeGraphQL.FieldResolver(_type => Premise, {
    nullable: false
  })
  async premise(@TypeGraphQL.Root() premisesOnTimelines: PremisesOnTimelines, @TypeGraphQL.Ctx() ctx: any): Promise<Premise> {
    return getPrismaFromContext(ctx).premisesOnTimelines.findUnique({
      where: {
        premiseId_timelineId: {
          premiseId: premisesOnTimelines.premiseId,
          timelineId: premisesOnTimelines.timelineId,
        },
      },
    }).premise({});
  }
}
