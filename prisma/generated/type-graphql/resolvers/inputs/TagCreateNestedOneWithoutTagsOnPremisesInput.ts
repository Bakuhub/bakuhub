import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutTagsOnPremisesInput } from "../inputs/TagCreateOrConnectWithoutTagsOnPremisesInput";
import { TagCreateWithoutTagsOnPremisesInput } from "../inputs/TagCreateWithoutTagsOnPremisesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutTagsOnPremisesInput", {
  isAbstract: true
})
export class TagCreateNestedOneWithoutTagsOnPremisesInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnPremisesInput, {
    nullable: true
  })
  create?: TagCreateWithoutTagsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnPremisesInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutTagsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
