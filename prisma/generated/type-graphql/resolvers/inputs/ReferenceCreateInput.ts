import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotCreateNestedManyWithoutReferencesInput } from "../inputs/SnapshotCreateNestedManyWithoutReferencesInput";
import { VisionCreateNestedManyWithoutReferenceInput } from "../inputs/VisionCreateNestedManyWithoutReferenceInput";

@TypeGraphQL.InputType("ReferenceCreateInput", {
  isAbstract: true
})
export class ReferenceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => SnapshotCreateNestedManyWithoutReferencesInput, {
    nullable: true
  })
  snapshots?: SnapshotCreateNestedManyWithoutReferencesInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutReferenceInput, {
    nullable: true
  })
  vision?: VisionCreateNestedManyWithoutReferenceInput | undefined;
}
