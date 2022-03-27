import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnPremisesUpdateManyWithoutTagInput } from "../inputs/TagsOnPremisesUpdateManyWithoutTagInput";

@TypeGraphQL.InputType("TagUpdateWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TagUpdateWithoutTagsOnTimelinesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  label?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutTagInput, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesUpdateManyWithoutTagInput | undefined;
}
