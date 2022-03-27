import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesCreateWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateWithoutTimelineInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateOrConnectWithoutTimelineInput", {
  isAbstract: true
})
export class TagsOnTimelinesCreateOrConnectWithoutTimelineInput {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: TagsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: TagsOnTimelinesCreateWithoutTimelineInput;
}
