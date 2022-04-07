import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateWithoutTimelineInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateOrConnectWithoutTimelineInput", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateOrConnectWithoutTimelineInput {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: ReactionOnTimelinesCreateWithoutTimelineInput;
}
