import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateWithoutVisionInput } from "../inputs/VotesOnVisionCreateWithoutVisionInput";
import { VotesOnVisionUpdateWithoutVisionInput } from "../inputs/VotesOnVisionUpdateWithoutVisionInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput", {
  isAbstract: true
})
export class VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnVisionUpdateWithoutVisionInput, {
    nullable: false
  })
  update!: VotesOnVisionUpdateWithoutVisionInput;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateWithoutVisionInput, {
    nullable: false
  })
  create!: VotesOnVisionCreateWithoutVisionInput;
}
