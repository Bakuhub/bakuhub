import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesCreateWithoutTagInput } from "../inputs/TagsOnTimelinesCreateWithoutTagInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateOrConnectWithoutTagInput", {
  isAbstract: true
})
export class TagsOnTimelinesCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateWithoutTagInput, {
    nullable: false
  })
  create!: TagsOnTimelinesCreateWithoutTagInput;
}
