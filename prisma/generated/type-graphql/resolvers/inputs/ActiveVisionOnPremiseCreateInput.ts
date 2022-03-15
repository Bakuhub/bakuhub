import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput";
import { VisionCreateNestedOneWithoutActiveVisionOnPremiseInput } from "../inputs/VisionCreateNestedOneWithoutActiveVisionOnPremiseInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateInput {
  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput;

  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  vision!: VisionCreateNestedOneWithoutActiveVisionOnPremiseInput;
}
