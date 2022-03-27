import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutPremisesOnTimelinesInput";
import { TimelineCreateWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateWithoutPremisesOnTimelinesInput";
import { TimelineUpdateWithoutPremisesOnTimelinesInput } from "../inputs/TimelineUpdateWithoutPremisesOnTimelinesInput";
import { TimelineUpsertWithoutPremisesOnTimelinesInput } from "../inputs/TimelineUpsertWithoutPremisesOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpsertWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  upsert?: TimelineUpsertWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  update?: TimelineUpdateWithoutPremisesOnTimelinesInput | undefined;
}
