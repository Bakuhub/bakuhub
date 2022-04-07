import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutReactionOnTimelinesInput";
import { TimelineCreateWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateWithoutReactionOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateNestedOneWithoutReactionOnTimelinesInput", {
  isAbstract: true
})
export class TimelineCreateNestedOneWithoutReactionOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;
}
