import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVotesOnPremiseInput } from "../inputs/UserCreateOrConnectWithoutVotesOnPremiseInput";
import { UserCreateWithoutVotesOnPremiseInput } from "../inputs/UserCreateWithoutVotesOnPremiseInput";
import { UserUpdateWithoutVotesOnPremiseInput } from "../inputs/UserUpdateWithoutVotesOnPremiseInput";
import { UserUpsertWithoutVotesOnPremiseInput } from "../inputs/UserUpsertWithoutVotesOnPremiseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVotesOnPremiseInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutVotesOnPremiseInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnPremiseInput, {
    nullable: true
  })
  create?: UserCreateWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnPremiseInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutVotesOnPremiseInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnPremiseInput, {
    nullable: true
  })
  update?: UserUpdateWithoutVotesOnPremiseInput | undefined;
}
