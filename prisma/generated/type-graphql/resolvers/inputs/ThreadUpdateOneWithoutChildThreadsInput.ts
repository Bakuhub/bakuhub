import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutChildThreadsInput } from "../inputs/ThreadCreateOrConnectWithoutChildThreadsInput";
import { ThreadCreateWithoutChildThreadsInput } from "../inputs/ThreadCreateWithoutChildThreadsInput";
import { ThreadUpdateWithoutChildThreadsInput } from "../inputs/ThreadUpdateWithoutChildThreadsInput";
import { ThreadUpsertWithoutChildThreadsInput } from "../inputs/ThreadUpsertWithoutChildThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateOneWithoutChildThreadsInput", {
  isAbstract: true
})
export class ThreadUpdateOneWithoutChildThreadsInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutChildThreadsInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutChildThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutChildThreadsInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutChildThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpsertWithoutChildThreadsInput, {
    nullable: true
  })
  upsert?: ThreadUpsertWithoutChildThreadsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateWithoutChildThreadsInput, {
    nullable: true
  })
  update?: ThreadUpdateWithoutChildThreadsInput | undefined;
}
