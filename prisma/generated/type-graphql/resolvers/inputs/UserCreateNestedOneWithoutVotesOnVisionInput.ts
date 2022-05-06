import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVotesOnVisionInput } from "../inputs/UserCreateOrConnectWithoutVotesOnVisionInput";
import { UserCreateWithoutVotesOnVisionInput } from "../inputs/UserCreateWithoutVotesOnVisionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutVotesOnVisionInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutVotesOnVisionInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnVisionInput, {
    nullable: true
  })
  create?: UserCreateWithoutVotesOnVisionInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnVisionInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVotesOnVisionInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
