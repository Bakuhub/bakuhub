import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVotesOnThreadInput } from "../inputs/UserCreateWithoutVotesOnThreadInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutVotesOnThreadInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutVotesOnThreadInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnThreadInput, {
    nullable: false
  })
  create!: UserCreateWithoutVotesOnThreadInput;
}
