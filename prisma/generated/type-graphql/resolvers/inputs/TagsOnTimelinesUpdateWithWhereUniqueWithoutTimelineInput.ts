import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesUpdateWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateWithoutTimelineInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class TagsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateWithoutTimelineInput, {
    nullable: false
  })
  data!: TagsOnTimelinesUpdateWithoutTimelineInput;
}
