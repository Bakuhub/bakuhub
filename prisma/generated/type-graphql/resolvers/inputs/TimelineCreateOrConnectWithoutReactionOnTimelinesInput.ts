import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateWithoutReactionOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateOrConnectWithoutReactionOnTimelinesInput", {
  isAbstract: true
})
export class TimelineCreateOrConnectWithoutReactionOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutReactionOnTimelinesInput;
}
