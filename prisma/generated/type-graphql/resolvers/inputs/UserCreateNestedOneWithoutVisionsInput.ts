import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVisionsInput } from "../inputs/UserCreateOrConnectWithoutVisionsInput";
import { UserCreateWithoutVisionsInput } from "../inputs/UserCreateWithoutVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutVisionsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutVisionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVisionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVisionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
