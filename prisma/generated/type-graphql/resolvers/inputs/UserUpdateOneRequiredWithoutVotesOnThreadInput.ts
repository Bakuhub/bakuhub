import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVotesOnThreadInput } from "../inputs/UserCreateOrConnectWithoutVotesOnThreadInput";
import { UserCreateWithoutVotesOnThreadInput } from "../inputs/UserCreateWithoutVotesOnThreadInput";
import { UserUpdateWithoutVotesOnThreadInput } from "../inputs/UserUpdateWithoutVotesOnThreadInput";
import { UserUpsertWithoutVotesOnThreadInput } from "../inputs/UserUpsertWithoutVotesOnThreadInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVotesOnThreadInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutVotesOnThreadInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnThreadInput, {
    nullable: true
  })
  create?: UserCreateWithoutVotesOnThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnThreadInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVotesOnThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutVotesOnThreadInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutVotesOnThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnThreadInput, {
    nullable: true
  })
  update?: UserUpdateWithoutVotesOnThreadInput | undefined;
}
