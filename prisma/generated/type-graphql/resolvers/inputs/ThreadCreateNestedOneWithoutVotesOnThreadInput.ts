import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutVotesOnThreadInput } from "../inputs/ThreadCreateOrConnectWithoutVotesOnThreadInput";
import { ThreadCreateWithoutVotesOnThreadInput } from "../inputs/ThreadCreateWithoutVotesOnThreadInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedOneWithoutVotesOnThreadInput", {
  isAbstract: true
})
export class ThreadCreateNestedOneWithoutVotesOnThreadInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutVotesOnThreadInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutVotesOnThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutVotesOnThreadInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutVotesOnThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;
}
