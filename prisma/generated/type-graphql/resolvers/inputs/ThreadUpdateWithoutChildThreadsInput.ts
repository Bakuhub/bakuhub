import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReactionOnThreadsUpdateManyWithoutThreadInput } from "../inputs/ReactionOnThreadsUpdateManyWithoutThreadInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadUpdateOneWithoutChildThreadsInput } from "../inputs/ThreadUpdateOneWithoutChildThreadsInput";
import { ThreadsOnMergeRequestUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestUpdateOneWithoutThreadInput";
import { ThreadsOnPremiseUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnPremiseUpdateOneWithoutThreadInput";
import { ThreadsOnTimelineUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnTimelineUpdateOneWithoutThreadInput";
import { ThreadsOnVisionUpdateOneWithoutThreadInput } from "../inputs/ThreadsOnVisionUpdateOneWithoutThreadInput";
import { UserUpdateOneWithoutThreadsInput } from "../inputs/UserUpdateOneWithoutThreadsInput";
import { VotesOnThreadUpdateManyWithoutThreadInput } from "../inputs/VotesOnThreadUpdateManyWithoutThreadInput";

@TypeGraphQL.InputType("ThreadUpdateWithoutChildThreadsInput", {
  isAbstract: true
})
export class ThreadUpdateWithoutChildThreadsInput {
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

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  reference?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutThreadsInput, {
    nullable: true
  })
  author?: UserUpdateOneWithoutThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateOneWithoutChildThreadsInput, {
    nullable: true
  })
  parentThread?: ThreadUpdateOneWithoutChildThreadsInput | undefined;

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

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateOneWithoutThreadInput, {
    nullable: true
  })
  threadsOnMergeRequest?: ThreadsOnMergeRequestUpdateOneWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyWithoutThreadInput, {
    nullable: true
  })
  reactionOnThreads?: ReactionOnThreadsUpdateManyWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadUpdateManyWithoutThreadInput, {
    nullable: true
  })
  votesOnThread?: VotesOnThreadUpdateManyWithoutThreadInput | undefined;
}
