import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutTagsOnTimelinesInput } from "../inputs/TagCreateOrConnectWithoutTagsOnTimelinesInput";
import { TagCreateWithoutTagsOnTimelinesInput } from "../inputs/TagCreateWithoutTagsOnTimelinesInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TagCreateNestedOneWithoutTagsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput, {
    nullable: true
  })
  create?: TagCreateWithoutTagsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutTagsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
