import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesCreateManyTimelineInput } from "../inputs/TagsOnTimelinesCreateManyTimelineInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateManyTimelineInputEnvelope", {
  isAbstract: true
})
export class TagsOnTimelinesCreateManyTimelineInputEnvelope {
  @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateManyTimelineInput], {
    nullable: false
  })
  data!: TagsOnTimelinesCreateManyTimelineInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
