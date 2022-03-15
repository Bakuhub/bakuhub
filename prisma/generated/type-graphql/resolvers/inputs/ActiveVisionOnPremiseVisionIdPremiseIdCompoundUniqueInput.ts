import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ActiveVisionOnPremiseVisionIdPremiseIdCompoundUniqueInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseVisionIdPremiseIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;
}
