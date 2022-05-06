import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateWithoutSubscriptionsOnPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSubscriptionsOnPremisesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSubscriptionsOnPremisesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnPremisesInput, {
    nullable: false
  })
  create!: UserCreateWithoutSubscriptionsOnPremisesInput;
}
