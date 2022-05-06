import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateOrConnectWithoutReactionOnThreadsInput";
import { ThreadCreateWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateWithoutReactionOnThreadsInput";
import { ThreadUpdateWithoutReactionOnThreadsInput } from "../inputs/ThreadUpdateWithoutReactionOnThreadsInput";
import { ThreadUpsertWithoutReactionOnThreadsInput } from "../inputs/ThreadUpsertWithoutReactionOnThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutReactionOnThreadsInput", {
  isAbstract: true
})
export class ThreadUpdateOneRequiredWithoutReactionOnThreadsInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutReactionOnThreadsInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutReactionOnThreadsInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpsertWithoutReactionOnThreadsInput, {
    nullable: true
  })
  upsert?: ThreadUpsertWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateWithoutReactionOnThreadsInput, {
    nullable: true
  })
  update?: ThreadUpdateWithoutReactionOnThreadsInput | undefined;
}
