import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateWithoutUserInput } from "../inputs/VotesOnPremiseCreateWithoutUserInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class VotesOnPremiseCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateWithoutUserInput, {
    nullable: false
  })
  create!: VotesOnPremiseCreateWithoutUserInput;
}
