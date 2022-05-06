import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVotesOnThreadInput } from "../inputs/UserCreateOrConnectWithoutVotesOnThreadInput";
import { UserCreateWithoutVotesOnThreadInput } from "../inputs/UserCreateWithoutVotesOnThreadInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutVotesOnThreadInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutVotesOnThreadInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnThreadInput, {
    nullable: true
  })
  create?: UserCreateWithoutVotesOnThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnThreadInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVotesOnThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
