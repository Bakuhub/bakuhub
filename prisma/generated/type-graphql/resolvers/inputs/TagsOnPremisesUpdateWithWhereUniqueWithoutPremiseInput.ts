import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesUpdateWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateWithoutPremiseInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutPremiseInput, {
    nullable: false
  })
  data!: TagsOnPremisesUpdateWithoutPremiseInput;
}
