import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesUpdateWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateWithoutTimelineInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateWithoutTimelineInput, {
    nullable: false
  })
  data!: ReactionOnTimelinesUpdateWithoutTimelineInput;
}
