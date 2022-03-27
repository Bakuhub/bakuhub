import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateNestedOneWithoutTagsOnPremisesInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateWithoutTagInput", {
  isAbstract: true
})
export class TagsOnPremisesCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutTagsOnPremisesInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutTagsOnPremisesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
