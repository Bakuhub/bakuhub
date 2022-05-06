import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseUpdateWithoutUserInput } from "../inputs/VotesOnPremiseUpdateWithoutUserInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class VotesOnPremiseUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateWithoutUserInput, {
    nullable: false
  })
  data!: VotesOnPremiseUpdateWithoutUserInput;
}
