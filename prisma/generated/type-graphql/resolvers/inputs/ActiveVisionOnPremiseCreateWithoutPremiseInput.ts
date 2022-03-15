import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateNestedOneWithoutActiveVisionOnPremiseInput } from "../inputs/VisionCreateNestedOneWithoutActiveVisionOnPremiseInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateWithoutPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateWithoutPremiseInput {
  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  vision!: VisionCreateNestedOneWithoutActiveVisionOnPremiseInput;
}
