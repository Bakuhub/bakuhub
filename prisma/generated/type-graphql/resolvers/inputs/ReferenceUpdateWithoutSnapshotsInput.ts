import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VisionUpdateManyWithoutReferenceInput } from "../inputs/VisionUpdateManyWithoutReferenceInput";

@TypeGraphQL.InputType("ReferenceUpdateWithoutSnapshotsInput", {
  isAbstract: true
})
export class ReferenceUpdateWithoutSnapshotsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutReferenceInput, {
    nullable: true
  })
  Vision?: VisionUpdateManyWithoutReferenceInput | undefined;
}
