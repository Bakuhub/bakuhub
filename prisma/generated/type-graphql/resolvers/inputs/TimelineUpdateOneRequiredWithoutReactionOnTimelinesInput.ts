import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutReactionOnTimelinesInput";
import { TimelineCreateWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateWithoutReactionOnTimelinesInput";
import { TimelineUpdateWithoutReactionOnTimelinesInput } from "../inputs/TimelineUpdateWithoutReactionOnTimelinesInput";
import { TimelineUpsertWithoutReactionOnTimelinesInput } from "../inputs/TimelineUpsertWithoutReactionOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpsertWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  upsert?: TimelineUpsertWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  update?: TimelineUpdateWithoutReactionOnTimelinesInput | undefined;
}
