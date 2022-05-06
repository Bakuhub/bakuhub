import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutVotesOnTimelineInput } from "../inputs/TimelineUpdateOneRequiredWithoutVotesOnTimelineInput";
import { UserUpdateOneRequiredWithoutVotesOnTimelineInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnTimelineInput";

@TypeGraphQL.InputType("VotesOnTimelineUpdateInput", {
  isAbstract: true
})
export class VotesOnTimelineUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnTimelineInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutVotesOnTimelineInput, {
    nullable: true
  })
  timeline?: TimelineUpdateOneRequiredWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  vote?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
