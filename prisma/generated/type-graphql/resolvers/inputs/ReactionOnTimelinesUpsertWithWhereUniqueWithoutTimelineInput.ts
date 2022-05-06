import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateWithoutTimelineInput";
import { ReactionOnTimelinesUpdateWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateWithoutTimelineInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateWithoutTimelineInput, {
    nullable: false
  })
  update!: ReactionOnTimelinesUpdateWithoutTimelineInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: ReactionOnTimelinesCreateWithoutTimelineInput;
}
