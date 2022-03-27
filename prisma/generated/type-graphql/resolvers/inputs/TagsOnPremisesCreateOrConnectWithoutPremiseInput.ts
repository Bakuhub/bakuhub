import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateWithoutPremiseInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateOrConnectWithoutPremiseInput", {
  isAbstract: true
})
export class TagsOnPremisesCreateOrConnectWithoutPremiseInput {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: TagsOnPremisesCreateWithoutPremiseInput;
}
