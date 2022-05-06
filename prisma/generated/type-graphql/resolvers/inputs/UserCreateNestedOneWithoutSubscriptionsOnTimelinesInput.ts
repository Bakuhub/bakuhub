import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput";
import { UserCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  create?: UserCreateWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
