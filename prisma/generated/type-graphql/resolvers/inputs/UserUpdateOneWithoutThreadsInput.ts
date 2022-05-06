import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutThreadsInput } from "../inputs/UserCreateOrConnectWithoutThreadsInput";
import { UserCreateWithoutThreadsInput } from "../inputs/UserCreateWithoutThreadsInput";
import { UserUpdateWithoutThreadsInput } from "../inputs/UserUpdateWithoutThreadsInput";
import { UserUpsertWithoutThreadsInput } from "../inputs/UserUpsertWithoutThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutThreadsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutThreadsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutThreadsInput, {
    nullable: true
  })
  create?: UserCreateWithoutThreadsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutThreadsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutThreadsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutThreadsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutThreadsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutThreadsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutThreadsInput | undefined;
}
