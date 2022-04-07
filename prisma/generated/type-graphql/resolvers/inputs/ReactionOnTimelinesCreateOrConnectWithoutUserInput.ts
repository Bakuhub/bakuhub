import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateWithoutUserInput";
import { ReactionOnTimelinesWhereUniqueInput } from "../inputs/ReactionOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReactionOnTimelinesCreateWithoutUserInput;
}
