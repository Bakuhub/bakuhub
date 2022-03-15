import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput } from "../inputs/VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpdateWithoutPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpdateWithoutPremiseInput {
  @TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  vision?: VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput | undefined;
}
