import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsOnPremisesInput";
import { UserCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateWithoutSubscriptionsOnPremisesInput";
import { UserUpdateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserUpdateWithoutSubscriptionsOnPremisesInput";
import { UserUpsertWithoutSubscriptionsOnPremisesInput } from "../inputs/UserUpsertWithoutSubscriptionsOnPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  create?: UserCreateWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSubscriptionsOnPremisesInput | undefined;
}
