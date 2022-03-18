import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutThreadsOnPremiseInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnPremiseInput";
import { ThreadCreateWithoutThreadsOnPremiseInput } from "../inputs/ThreadCreateWithoutThreadsOnPremiseInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnPremiseInput", {
  isAbstract: true
})
export class ThreadCreateNestedOneWithoutThreadsOnPremiseInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnPremiseInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutThreadsOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnPremiseInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;
}
