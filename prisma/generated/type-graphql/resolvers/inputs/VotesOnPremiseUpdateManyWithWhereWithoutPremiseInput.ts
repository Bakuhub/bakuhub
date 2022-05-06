import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseScalarWhereInput } from "../inputs/VotesOnPremiseScalarWhereInput";
import { VotesOnPremiseUpdateManyMutationInput } from "../inputs/VotesOnPremiseUpdateManyMutationInput";

@TypeGraphQL.InputType("VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput", {
  isAbstract: true
})
export class VotesOnPremiseUpdateManyWithWhereWithoutPremiseInput {
  @TypeGraphQL.Field(_type => VotesOnPremiseScalarWhereInput, {
    nullable: false
  })
  where!: VotesOnPremiseScalarWhereInput;

  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnPremiseUpdateManyMutationInput;
}
