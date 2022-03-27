import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotUpdateManyWithoutReferencesInput } from "../inputs/SnapshotUpdateManyWithoutReferencesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VisionUpdateManyWithoutReferenceInput } from "../inputs/VisionUpdateManyWithoutReferenceInput";

@TypeGraphQL.InputType("ReferenceUpdateInput", {
  isAbstract: true
})
export class ReferenceUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SnapshotUpdateManyWithoutReferencesInput, {
    nullable: true
  })
  snapshots?: SnapshotUpdateManyWithoutReferencesInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutReferenceInput, {
    nullable: true
  })
  Vision?: VisionUpdateManyWithoutReferenceInput | undefined;
}
