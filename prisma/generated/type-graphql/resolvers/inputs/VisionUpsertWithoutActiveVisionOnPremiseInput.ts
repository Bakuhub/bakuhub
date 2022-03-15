import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutActiveVisionOnPremiseInput } from "../inputs/VisionCreateWithoutActiveVisionOnPremiseInput";
import { VisionUpdateWithoutActiveVisionOnPremiseInput } from "../inputs/VisionUpdateWithoutActiveVisionOnPremiseInput";

@TypeGraphQL.InputType("VisionUpsertWithoutActiveVisionOnPremiseInput", {
  isAbstract: true
})
export class VisionUpsertWithoutActiveVisionOnPremiseInput {
  @TypeGraphQL.Field(_type => VisionUpdateWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutActiveVisionOnPremiseInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  create!: VisionCreateWithoutActiveVisionOnPremiseInput;
}
