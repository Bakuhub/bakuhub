import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutTagsOnTimelinesInput";
import { TimelineCreateWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateWithoutTagsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateNestedOneWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineCreateNestedOneWithoutTagsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutTagsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutTagsOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutTagsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;
}
