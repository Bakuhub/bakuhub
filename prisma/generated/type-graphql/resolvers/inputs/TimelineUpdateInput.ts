import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput";
import { UserUpdateOneRequiredWithoutTimelineInput } from "../inputs/UserUpdateOneRequiredWithoutTimelineInput";

@TypeGraphQL.InputType("TimelineUpdateInput", {
  isAbstract: true
})
export class TimelineUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelineInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
}
