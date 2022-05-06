import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateWithoutUserInput } from "../inputs/VotesOnPremiseCreateWithoutUserInput";
import { VotesOnPremiseUpdateWithoutUserInput } from "../inputs/VotesOnPremiseUpdateWithoutUserInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class VotesOnPremiseUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateWithoutUserInput, {
    nullable: false
  })
  update!: VotesOnPremiseUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateWithoutUserInput, {
    nullable: false
  })
  create!: VotesOnPremiseCreateWithoutUserInput;
}
