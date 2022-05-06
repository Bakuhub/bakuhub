import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateWithoutPremiseInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateOrConnectWithoutPremiseInput", {
  isAbstract: true
})
export class VotesOnPremiseCreateOrConnectWithoutPremiseInput {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: VotesOnPremiseCreateWithoutPremiseInput;
}
