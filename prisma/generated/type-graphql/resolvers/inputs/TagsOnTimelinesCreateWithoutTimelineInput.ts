import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutTagsOnTimelinesInput } from "../inputs/TagCreateNestedOneWithoutTagsOnTimelinesInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateWithoutTimelineInput", {
  isAbstract: true
})
export class TagsOnTimelinesCreateWithoutTimelineInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnTimelinesInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutTagsOnTimelinesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
