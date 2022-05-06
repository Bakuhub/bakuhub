import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutVotesOnPremiseInput } from "../inputs/UserCreateNestedOneWithoutVotesOnPremiseInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateWithoutPremiseInput", {
  isAbstract: true
})
export class VotesOnPremiseCreateWithoutPremiseInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnPremiseInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVotesOnPremiseInput;

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
