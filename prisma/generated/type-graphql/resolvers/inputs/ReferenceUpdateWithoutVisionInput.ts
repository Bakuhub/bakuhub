import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotUpdateManyWithoutReferencesInput } from "../inputs/SnapshotUpdateManyWithoutReferencesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ReferenceUpdateWithoutVisionInput", {
  isAbstract: true
})
export class ReferenceUpdateWithoutVisionInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SnapshotUpdateManyWithoutReferencesInput, {
    nullable: true
  })
  snapshots?: SnapshotUpdateManyWithoutReferencesInput | undefined;
}
