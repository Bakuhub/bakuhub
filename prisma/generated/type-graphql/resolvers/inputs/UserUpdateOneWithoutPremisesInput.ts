import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPremisesInput } from "../inputs/UserCreateOrConnectWithoutPremisesInput";
import { UserCreateWithoutPremisesInput } from "../inputs/UserCreateWithoutPremisesInput";
import { UserUpdateWithoutPremisesInput } from "../inputs/UserUpdateWithoutPremisesInput";
import { UserUpsertWithoutPremisesInput } from "../inputs/UserUpsertWithoutPremisesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutPremisesInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutPremisesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPremisesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPremisesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPremisesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPremisesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPremisesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPremisesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPremisesInput | undefined;
}
