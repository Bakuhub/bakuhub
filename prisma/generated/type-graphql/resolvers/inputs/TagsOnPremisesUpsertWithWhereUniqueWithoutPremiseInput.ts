import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateWithoutPremiseInput";
import { TagsOnPremisesUpdateWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateWithoutPremiseInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutPremiseInput, {
    nullable: false
  })
  update!: TagsOnPremisesUpdateWithoutPremiseInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: TagsOnPremisesCreateWithoutPremiseInput;
}
