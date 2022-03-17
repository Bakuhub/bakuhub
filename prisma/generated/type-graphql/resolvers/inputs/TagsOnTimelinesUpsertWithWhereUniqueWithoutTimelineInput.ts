import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesCreateWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateWithoutTimelineInput";
import { TagsOnTimelinesUpdateWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateWithoutTimelineInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class TagsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateWithoutTimelineInput, {
    nullable: false
  })
  update!: TagsOnTimelinesUpdateWithoutTimelineInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: TagsOnTimelinesCreateWithoutTimelineInput;
}