import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TagsOnPremisesTagIdPremiseIdCompoundUniqueInput", {
  isAbstract: true
})
export class TagsOnPremisesTagIdPremiseIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tagId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;
}
