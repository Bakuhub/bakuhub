import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateManyInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;
}
