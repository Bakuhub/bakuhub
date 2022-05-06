import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput } from "../inputs/TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesWhereUniqueInput", {
  isAbstract: true
})
export class TagsOnTimelinesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput, {
    nullable: true
  })
  tagId_timelineId?: TagsOnTimelinesTagIdTimelineIdCompoundUniqueInput | undefined;
}
