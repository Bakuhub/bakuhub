import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutTagsOnTimelinesInput } from "../inputs/TagCreateWithoutTagsOnTimelinesInput";
import { TagUpdateWithoutTagsOnTimelinesInput } from "../inputs/TagUpdateWithoutTagsOnTimelinesInput";

@TypeGraphQL.InputType("TagUpsertWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TagUpsertWithoutTagsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnTimelinesInput, {
    nullable: false
  })
  update!: TagUpdateWithoutTagsOnTimelinesInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput, {
    nullable: false
  })
  create!: TagCreateWithoutTagsOnTimelinesInput;
}
