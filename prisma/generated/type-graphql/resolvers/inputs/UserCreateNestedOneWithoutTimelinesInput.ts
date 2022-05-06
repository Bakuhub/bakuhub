import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTimelinesInput } from "../inputs/UserCreateOrConnectWithoutTimelinesInput";
import { UserCreateWithoutTimelinesInput } from "../inputs/UserCreateWithoutTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTimelinesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutTimelinesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTimelinesInput, {
    nullable: true
  })
  create?: UserCreateWithoutTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
