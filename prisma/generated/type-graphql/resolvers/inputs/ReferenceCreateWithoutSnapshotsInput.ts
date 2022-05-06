import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateNestedManyWithoutReferenceInput } from "../inputs/VisionCreateNestedManyWithoutReferenceInput";

@TypeGraphQL.InputType("ReferenceCreateWithoutSnapshotsInput", {
  isAbstract: true
})
export class ReferenceCreateWithoutSnapshotsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutReferenceInput, {
    nullable: true
  })
  vision?: VisionCreateNestedManyWithoutReferenceInput | undefined;
}
