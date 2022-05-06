import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVisionsInput } from "../inputs/UserCreateOrConnectWithoutVisionsInput";
import { UserCreateWithoutVisionsInput } from "../inputs/UserCreateWithoutVisionsInput";
import { UserUpdateWithoutVisionsInput } from "../inputs/UserUpdateWithoutVisionsInput";
import { UserUpsertWithoutVisionsInput } from "../inputs/UserUpsertWithoutVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutVisionsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutVisionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVisionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVisionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutVisionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutVisionsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutVisionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutVisionsInput | undefined;
}
