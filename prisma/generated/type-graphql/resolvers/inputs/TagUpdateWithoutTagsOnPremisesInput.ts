import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnTimelinesUpdateManyWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTagInput";

@TypeGraphQL.InputType("TagUpdateWithoutTagsOnPremisesInput", {
  isAbstract: true
})
export class TagUpdateWithoutTagsOnPremisesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  label?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTagInput, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTagInput | undefined;
}
