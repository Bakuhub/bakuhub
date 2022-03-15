import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutTagsOnPremisesInput } from "../inputs/TagCreateWithoutTagsOnPremisesInput";
import { TagUpdateWithoutTagsOnPremisesInput } from "../inputs/TagUpdateWithoutTagsOnPremisesInput";

@TypeGraphQL.InputType("TagUpsertWithoutTagsOnPremisesInput", {
  isAbstract: true
})
export class TagUpsertWithoutTagsOnPremisesInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnPremisesInput, {
    nullable: false
  })
  update!: TagUpdateWithoutTagsOnPremisesInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnPremisesInput, {
    nullable: false
  })
  create!: TagCreateWithoutTagsOnPremisesInput;
}
