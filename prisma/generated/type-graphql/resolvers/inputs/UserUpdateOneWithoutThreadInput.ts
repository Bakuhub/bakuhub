import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutThreadInput } from "../inputs/UserCreateOrConnectWithoutThreadInput";
import { UserCreateWithoutThreadInput } from "../inputs/UserCreateWithoutThreadInput";
import { UserUpdateWithoutThreadInput } from "../inputs/UserUpdateWithoutThreadInput";
import { UserUpsertWithoutThreadInput } from "../inputs/UserUpsertWithoutThreadInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutThreadInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutThreadInput, {
    nullable: true
  })
  create?: UserCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutThreadInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutThreadInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutThreadInput, {
    nullable: true
  })
  update?: UserUpdateWithoutThreadInput | undefined;
}
