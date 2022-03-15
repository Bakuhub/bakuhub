import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPremiseInput } from "../inputs/UserCreateWithoutPremiseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPremiseInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPremiseInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: UserCreateWithoutPremiseInput;
}
