import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMergeRequestStatusFieldUpdateOperationsInput } from "../inputs/EnumMergeRequestStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput";
import { VisionUpdateOneRequiredWithoutMergeRequestInput } from "../inputs/VisionUpdateOneRequiredWithoutMergeRequestInput";

@TypeGraphQL.InputType("MergeRequestUpdateInput", {
  isAbstract: true
})
export class MergeRequestUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumMergeRequestStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumMergeRequestStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutMergeRequestInput, {
    nullable: true
  })
  vision?: VisionUpdateOneRequiredWithoutMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput, {
    nullable: true
  })
  threadsOnMergeRequest?: ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput | undefined;
}
