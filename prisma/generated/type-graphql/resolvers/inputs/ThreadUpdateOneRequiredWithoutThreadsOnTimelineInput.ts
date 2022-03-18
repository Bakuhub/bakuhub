import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnTimelineInput";
import { ThreadCreateWithoutThreadsOnTimelineInput } from "../inputs/ThreadCreateWithoutThreadsOnTimelineInput";
import { ThreadUpdateWithoutThreadsOnTimelineInput } from "../inputs/ThreadUpdateWithoutThreadsOnTimelineInput";
import { ThreadUpsertWithoutThreadsOnTimelineInput } from "../inputs/ThreadUpsertWithoutThreadsOnTimelineInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput", {
  isAbstract: true
})
export class ThreadUpdateOneRequiredWithoutThreadsOnTimelineInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpsertWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  upsert?: ThreadUpsertWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  update?: ThreadUpdateWithoutThreadsOnTimelineInput | undefined;
}
