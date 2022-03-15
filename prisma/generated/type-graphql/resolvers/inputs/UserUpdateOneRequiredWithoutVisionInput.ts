import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVisionInput } from "../inputs/UserCreateOrConnectWithoutVisionInput";
import { UserCreateWithoutVisionInput } from "../inputs/UserCreateWithoutVisionInput";
import { UserUpdateWithoutVisionInput } from "../inputs/UserUpdateWithoutVisionInput";
import { UserUpsertWithoutVisionInput } from "../inputs/UserUpsertWithoutVisionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVisionInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutVisionInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVisionInput, {
    nullable: true
  })
  create?: UserCreateWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVisionInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutVisionInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutVisionInput, {
    nullable: true
  })
  update?: UserUpdateWithoutVisionInput | undefined;
}
