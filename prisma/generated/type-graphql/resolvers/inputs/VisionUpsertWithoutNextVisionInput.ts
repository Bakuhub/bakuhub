import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutNextVisionInput } from "../inputs/VisionCreateWithoutNextVisionInput";
import { VisionUpdateWithoutNextVisionInput } from "../inputs/VisionUpdateWithoutNextVisionInput";

@TypeGraphQL.InputType("VisionUpsertWithoutNextVisionInput", {
  isAbstract: true
})
export class VisionUpsertWithoutNextVisionInput {
  @TypeGraphQL.Field(_type => VisionUpdateWithoutNextVisionInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutNextVisionInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionInput, {
    nullable: false
  })
  create!: VisionCreateWithoutNextVisionInput;
}
