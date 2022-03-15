import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpdateWithoutVisionInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpdateWithoutVisionInput {
  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput | undefined;
}
