import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateWithoutUserInput } from "../inputs/VotesOnVisionCreateWithoutUserInput";
import { VotesOnVisionUpdateWithoutUserInput } from "../inputs/VotesOnVisionUpdateWithoutUserInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class VotesOnVisionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnVisionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: VotesOnVisionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateWithoutUserInput, {
    nullable: false
  })
  create!: VotesOnVisionCreateWithoutUserInput;
}
