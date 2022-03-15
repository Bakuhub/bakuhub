import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateManyPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateManyPremiseInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;
}
