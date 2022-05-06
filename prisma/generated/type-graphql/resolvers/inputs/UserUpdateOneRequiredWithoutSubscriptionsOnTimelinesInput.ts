import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput";
import { UserCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput";
import { UserUpdateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserUpdateWithoutSubscriptionsOnTimelinesInput";
import { UserUpsertWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserUpsertWithoutSubscriptionsOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  create?: UserCreateWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSubscriptionsOnTimelinesInput | undefined;
}
