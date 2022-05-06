import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutTagsOnPremisesInput } from "../inputs/TagCreateWithoutTagsOnPremisesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateOrConnectWithoutTagsOnPremisesInput", {
  isAbstract: true
})
export class TagCreateOrConnectWithoutTagsOnPremisesInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnPremisesInput, {
    nullable: false
  })
  create!: TagCreateWithoutTagsOnPremisesInput;
}
