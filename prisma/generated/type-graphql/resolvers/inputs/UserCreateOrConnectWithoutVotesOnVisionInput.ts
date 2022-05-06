import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVotesOnVisionInput } from "../inputs/UserCreateWithoutVotesOnVisionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutVotesOnVisionInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutVotesOnVisionInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnVisionInput, {
    nullable: false
  })
  create!: UserCreateWithoutVotesOnVisionInput;
}
