import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnPremisesCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType("TagCreateWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TagCreateWithoutTagsOnTimelinesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutTagInput | undefined;
}
