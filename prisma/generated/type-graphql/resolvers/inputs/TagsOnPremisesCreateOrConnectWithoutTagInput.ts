import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateWithoutTagInput } from "../inputs/TagsOnPremisesCreateWithoutTagInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateOrConnectWithoutTagInput", {
  isAbstract: true
})
export class TagsOnPremisesCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutTagInput, {
    nullable: false
  })
  create!: TagsOnPremisesCreateWithoutTagInput;
}
