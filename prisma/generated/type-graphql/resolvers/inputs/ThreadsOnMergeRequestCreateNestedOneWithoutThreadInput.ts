import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput";
import { ThreadsOnMergeRequestCreateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutThreadInput, {
    nullable: true
  })
  create?: ThreadsOnMergeRequestCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadsOnMergeRequestWhereUniqueInput | undefined;
}
