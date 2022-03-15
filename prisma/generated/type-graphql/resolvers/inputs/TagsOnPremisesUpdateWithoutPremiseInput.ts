import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TagUpdateOneRequiredWithoutTagsOnPremisesInput } from "../inputs/TagUpdateOneRequiredWithoutTagsOnPremisesInput";

@TypeGraphQL.InputType("TagsOnPremisesUpdateWithoutPremiseInput", {
  isAbstract: true
})
export class TagsOnPremisesUpdateWithoutPremiseInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTagsOnPremisesInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutTagsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
