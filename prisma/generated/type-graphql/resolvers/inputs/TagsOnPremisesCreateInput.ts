import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateNestedOneWithoutTagsOnPremisesInput";
import { TagCreateNestedOneWithoutTagsOnPremisesInput } from "../inputs/TagCreateNestedOneWithoutTagsOnPremisesInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateInput", {
  isAbstract: true
})
export class TagsOnPremisesCreateInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnPremisesInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutTagsOnPremisesInput;

  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutTagsOnPremisesInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutTagsOnPremisesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
