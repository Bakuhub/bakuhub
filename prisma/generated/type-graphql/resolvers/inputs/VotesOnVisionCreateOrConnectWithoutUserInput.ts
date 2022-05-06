import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateWithoutUserInput } from "../inputs/VotesOnVisionCreateWithoutUserInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class VotesOnVisionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateWithoutUserInput, {
    nullable: false
  })
  create!: VotesOnVisionCreateWithoutUserInput;
}
