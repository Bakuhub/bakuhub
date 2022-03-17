import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput";
import { TagsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput";

@TypeGraphQL.InputType("TimelineCreateWithoutAuthorInput", {
  isAbstract: true
})
export class TimelineCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
}