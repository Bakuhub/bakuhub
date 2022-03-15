import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput";
import { VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput } from "../inputs/VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpdateInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpdateInput {
  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  vision?: VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput | undefined;
}
