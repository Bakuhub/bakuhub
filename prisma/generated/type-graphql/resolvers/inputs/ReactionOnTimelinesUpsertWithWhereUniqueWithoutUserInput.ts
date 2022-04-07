import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateWithoutUserInput";
import { ReactionOnTimelinesUpdateWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateWithoutUserInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ReactionOnTimelinesUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReactionOnTimelinesCreateWithoutUserInput;
}
