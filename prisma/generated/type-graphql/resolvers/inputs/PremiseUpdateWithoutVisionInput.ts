import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPremiseStatusFieldUpdateOperationsInput } from "../inputs/EnumPremiseStatusFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { PremisesOnTimelinesUpdateManyWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutPremiseInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnPremisesUpdateManyWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateManyWithoutPremiseInput";
import { ThreadsOnPremiseUpdateManyWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpdateManyWithoutPremiseInput";
import { UserUpdateOneWithoutPremisesInput } from "../inputs/UserUpdateOneWithoutPremisesInput";

@TypeGraphQL.InputType("PremiseUpdateWithoutVisionInput", {
  isAbstract: true
})
export class PremiseUpdateWithoutVisionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPremiseStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumPremiseStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutPremisesInput, {
    nullable: true
  })
  author?: UserUpdateOneWithoutPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutPremiseInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutPremiseInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutPremiseInput, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesUpdateManyWithoutPremiseInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyWithoutPremiseInput, {
    nullable: true
  })
  threadsOnPremise?: ThreadsOnPremiseUpdateManyWithoutPremiseInput | undefined;
}
