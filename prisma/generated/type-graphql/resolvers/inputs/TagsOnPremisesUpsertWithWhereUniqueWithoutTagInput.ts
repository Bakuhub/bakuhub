import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateWithoutTagInput } from "../inputs/TagsOnPremisesCreateWithoutTagInput";
import { TagsOnPremisesUpdateWithoutTagInput } from "../inputs/TagsOnPremisesUpdateWithoutTagInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutTagInput, {
    nullable: false
  })
  update!: TagsOnPremisesUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutTagInput, {
    nullable: false
  })
  create!: TagsOnPremisesCreateWithoutTagInput;
}