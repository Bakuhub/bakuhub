import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseUpdateManyWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseUpdateManyWithoutPremiseInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPremiseStatusFieldUpdateOperationsInput } from "../inputs/EnumPremiseStatusFieldUpdateOperationsInput";
import { PremisesOnTimelinesUpdateManyWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutPremiseInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnPremisesUpdateManyWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateManyWithoutPremiseInput";
import { UserUpdateOneRequiredWithoutPremiseInput } from "../inputs/UserUpdateOneRequiredWithoutPremiseInput";
import { VisionUpdateManyWithoutPremiseInput } from "../inputs/VisionUpdateManyWithoutPremiseInput";

@TypeGraphQL.InputType("PremiseUpdateWithoutThreadInput", {
  isAbstract: true
})
export class PremiseUpdateWithoutThreadInput {
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

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumPremiseStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumPremiseStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPremiseInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutPremiseInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutPremiseInput, {
    nullable: true
  })
  vision?: VisionUpdateManyWithoutPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutPremiseInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutPremiseInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyWithoutPremiseInput, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesUpdateManyWithoutPremiseInput | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateManyWithoutPremiseInput, {
    nullable: true
  })
  activeVisionOnPremise?: ActiveVisionOnPremiseUpdateManyWithoutPremiseInput | undefined;
}
