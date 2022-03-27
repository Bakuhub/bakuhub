import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesCreateWithoutTagInput } from "../inputs/TagsOnTimelinesCreateWithoutTagInput";
import { TagsOnTimelinesUpdateWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateWithoutTagInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateWithoutTagInput, {
    nullable: false
  })
  update!: TagsOnTimelinesUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateWithoutTagInput, {
    nullable: false
  })
  create!: TagsOnTimelinesCreateWithoutTagInput;
}
