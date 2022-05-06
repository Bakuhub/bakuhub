import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSubscriptionsOnTimelinesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnTimelinesInput, {
    nullable: false
  })
  create!: UserCreateWithoutSubscriptionsOnTimelinesInput;
}
