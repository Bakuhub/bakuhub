import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPremisesInput } from "../inputs/UserCreateOrConnectWithoutPremisesInput";
import { UserCreateWithoutPremisesInput } from "../inputs/UserCreateWithoutPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPremisesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutPremisesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPremisesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPremisesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
