import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnPremisesCreateNestedManyWithoutTagInput";
import { TagsOnTimelinesCreateNestedManyWithoutTagInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType("TagCreateInput", {
  isAbstract: true
})
export class TagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesCreateNestedManyWithoutTagInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTagInput | undefined;
}
