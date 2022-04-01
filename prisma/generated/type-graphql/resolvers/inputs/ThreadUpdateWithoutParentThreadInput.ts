import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReactionOnThreadUpdateManyWithoutThreadInput } from "../inputs/ReactionOnThreadUpdateManyWithoutThreadInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadUpdateManyWithoutParentThreadInput } from "../inputs/ThreadUpdateManyWithoutParentThreadInput";
import { ThreadsOnPremiseUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnPremiseUpdateOneWithoutThreadInput";
import { ThreadsOnTimelineUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnTimelineUpdateOneWithoutThreadInput";
import { ThreadsOnVisionUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnVisionUpdateOneWithoutThreadInput";
import { UserUpdateOneWithoutThreadsInput } from "../inputs/UserUpdateOneWithoutThreadsInput";

@TypeGraphQL.InputType("ThreadUpdateWithoutParentThreadInput", {
  isAbstract: true
})
export class ThreadUpdateWithoutParentThreadInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  activityDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  reference?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutThreadsInput, {
    nullable: true
  })
  author?: UserUpdateOneWithoutThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateManyWithoutParentThreadInput, {
    nullable: true
  })
  childThreads?: ThreadUpdateManyWithoutParentThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateOneWithoutThreadInput, {
    nullable: true
  })
  threadsOnPremise?: ThreadsOnPremiseUpdateOneWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateOneWithoutThreadInput, {
    nullable: true
  })
  threadsOnTimeline?: ThreadsOnTimelineUpdateOneWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateOneWithoutThreadInput, {
    nullable: true
  })
  threadsOnVision?: ThreadsOnVisionUpdateOneWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadUpdateManyWithoutThreadInput, {
    nullable: true
  })
  ReactionOnThread?: ReactionOnThreadUpdateManyWithoutThreadInput | undefined;
}
