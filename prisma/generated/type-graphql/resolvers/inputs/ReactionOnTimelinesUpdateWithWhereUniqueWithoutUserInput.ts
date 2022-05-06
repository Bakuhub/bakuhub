import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesUpdateWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateWithoutUserInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ReactionOnTimelinesUpdateWithoutUserInput;
}
