import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionUpdateWithoutVisionInput } from "../inputs/VotesOnVisionUpdateWithoutVisionInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput", {
  isAbstract: true
})
export class VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnVisionUpdateWithoutVisionInput, {
    nullable: false
  })
  data!: VotesOnVisionUpdateWithoutVisionInput;
}
