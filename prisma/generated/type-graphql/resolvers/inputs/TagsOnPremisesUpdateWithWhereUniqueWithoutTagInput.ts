import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesUpdateWithoutTagInput } from "../inputs/TagsOnPremisesUpdateWithoutTagInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutTagInput, {
    nullable: false
  })
  data!: TagsOnPremisesUpdateWithoutTagInput;
}
