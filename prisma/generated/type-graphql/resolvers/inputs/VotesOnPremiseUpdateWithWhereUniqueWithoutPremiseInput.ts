import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseUpdateWithoutPremiseInput } from "../inputs/VotesOnPremiseUpdateWithoutPremiseInput";
import { VotesOnPremiseWhereUniqueInput } from "../inputs/VotesOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class VotesOnPremiseUpdateWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateWithoutPremiseInput, {
    nullable: false
  })
  data!: VotesOnPremiseUpdateWithoutPremiseInput;
}
