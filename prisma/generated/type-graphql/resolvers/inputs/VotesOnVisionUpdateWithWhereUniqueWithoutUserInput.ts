import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionUpdateWithoutUserInput } from "../inputs/VotesOnVisionUpdateWithoutUserInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class VotesOnVisionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnVisionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: VotesOnVisionUpdateWithoutUserInput;
}
