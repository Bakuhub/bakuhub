import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutVotesOnThreadInput } from "../inputs/ThreadCreateWithoutVotesOnThreadInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutVotesOnThreadInput", {
  isAbstract: true
})
export class ThreadCreateOrConnectWithoutVotesOnThreadInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutVotesOnThreadInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutVotesOnThreadInput;
}
