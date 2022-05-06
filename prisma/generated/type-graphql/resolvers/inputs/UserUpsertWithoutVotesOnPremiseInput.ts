import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVotesOnPremiseInput } from "../inputs/UserCreateWithoutVotesOnPremiseInput";
import { UserUpdateWithoutVotesOnPremiseInput } from "../inputs/UserUpdateWithoutVotesOnPremiseInput";

@TypeGraphQL.InputType("UserUpsertWithoutVotesOnPremiseInput", {
  isAbstract: true
})
export class UserUpsertWithoutVotesOnPremiseInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnPremiseInput, {
    nullable: false
  })
  update!: UserUpdateWithoutVotesOnPremiseInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnPremiseInput, {
    nullable: false
  })
  create!: UserCreateWithoutVotesOnPremiseInput;
}
