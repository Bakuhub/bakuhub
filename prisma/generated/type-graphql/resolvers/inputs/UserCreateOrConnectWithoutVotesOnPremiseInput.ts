import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVotesOnPremiseInput } from "../inputs/UserCreateWithoutVotesOnPremiseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutVotesOnPremiseInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutVotesOnPremiseInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnPremiseInput, {
    nullable: false
  })
  create!: UserCreateWithoutVotesOnPremiseInput;
}
