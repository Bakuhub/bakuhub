import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateWithoutPremiseInput } from "../inputs/VotesOnPremiseCreateWithoutPremiseInput";
import { VotesOnPremiseUpdateWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateWithoutPremiseInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class VotesOnPremiseUpsertWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateWithoutPremiseInput, {
    nullable: false
  })
  update!: VotesOnPremiseUpdateWithoutPremiseInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: VotesOnPremiseCreateWithoutPremiseInput;
}
