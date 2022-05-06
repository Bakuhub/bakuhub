import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTimelinesInput } from "../inputs/UserCreateOrConnectWithoutTimelinesInput";
import { UserCreateWithoutTimelinesInput } from "../inputs/UserCreateWithoutTimelinesInput";
import { UserUpdateWithoutTimelinesInput } from "../inputs/UserUpdateWithoutTimelinesInput";
import { UserUpsertWithoutTimelinesInput } from "../inputs/UserUpsertWithoutTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTimelinesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTimelinesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTimelinesInput, {
    nullable: true
  })
  create?: UserCreateWithoutTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTimelinesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTimelinesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTimelinesInput | undefined;
}
