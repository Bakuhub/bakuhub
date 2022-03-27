import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnTimelineInput";
import { ThreadCreateWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateWithoutThreadsOnTimelineInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnTimelineInput", {
  isAbstract: true
})
export class ThreadCreateNestedOneWithoutThreadsOnTimelineInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;
}
