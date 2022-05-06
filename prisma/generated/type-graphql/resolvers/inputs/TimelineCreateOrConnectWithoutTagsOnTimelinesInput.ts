import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateWithoutTagsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateOrConnectWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineCreateOrConnectWithoutTagsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutTagsOnTimelinesInput;
}
