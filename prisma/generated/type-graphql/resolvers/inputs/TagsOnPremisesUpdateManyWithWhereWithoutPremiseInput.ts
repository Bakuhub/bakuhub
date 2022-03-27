import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesScalarWhereInput } from "../inputs/TagsOnPremisesScalarWhereInput";
import { TagsOnPremisesUpdateManyMutationInput } from "../inputs/TagsOnPremisesUpdateManyMutationInput";

@TypeGraphQL.InputType("TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput", {
  isAbstract: true
})
export class TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput {
  @TypeGraphQL.Field(_type => TagsOnPremisesScalarWhereInput, {
    nullable: false
  })
  where!: TagsOnPremisesScalarWhereInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TagsOnPremisesUpdateManyMutationInput;
}
