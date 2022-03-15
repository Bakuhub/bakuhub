import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseVisionIdPremiseIdCompoundUniqueInput } from "../inputs/ActiveVisionOnPremiseVisionIdPremiseIdCompoundUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseWhereUniqueInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  premiseId?: string | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseVisionIdPremiseIdCompoundUniqueInput, {
    nullable: true
  })
  visionId_premiseId?: ActiveVisionOnPremiseVisionIdPremiseIdCompoundUniqueInput | undefined;
}
