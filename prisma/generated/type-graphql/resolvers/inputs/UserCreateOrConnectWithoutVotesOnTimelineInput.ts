import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVotesOnTimelineInput } from "../inputs/UserCreateWithoutVotesOnTimelineInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutVotesOnTimelineInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutVotesOnTimelineInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnTimelineInput, {
    nullable: false
  })
  create!: UserCreateWithoutVotesOnTimelineInput;
}
