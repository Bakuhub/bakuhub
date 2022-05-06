import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput";
import { ThreadsOnMergeRequestCreateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput";
import { ThreadsOnMergeRequestUpdateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestUpdateWithoutThreadInput";
import { ThreadsOnMergeRequestUpsertWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestUpsertWithoutThreadInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateOneWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestUpdateOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutThreadInput, {
    nullable: true
  })
  create?: ThreadsOnMergeRequestCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpsertWithoutThreadInput, {
    nullable: true
  })
  upsert?: ThreadsOnMergeRequestUpsertWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadsOnMergeRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateWithoutThreadInput, {
    nullable: true
  })
  update?: ThreadsOnMergeRequestUpdateWithoutThreadInput | undefined;
}
