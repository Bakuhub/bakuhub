import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsOnPremisesInput";
import { UserCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateWithoutSubscriptionsOnPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSubscriptionsOnPremisesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSubscriptionsOnPremisesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  create?: UserCreateWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
