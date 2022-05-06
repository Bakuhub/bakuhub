import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutVotesOnPremiseInput } from "../inputs/PremiseCreateNestedOneWithoutVotesOnPremiseInput";
import { UserCreateNestedOneWithoutVotesOnPremiseInput } from "../inputs/UserCreateNestedOneWithoutVotesOnPremiseInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateInput", {
  isAbstract: true
})
export class VotesOnPremiseCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnPremiseInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVotesOnPremiseInput;

  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutVotesOnPremiseInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutVotesOnPremiseInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  vote?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
