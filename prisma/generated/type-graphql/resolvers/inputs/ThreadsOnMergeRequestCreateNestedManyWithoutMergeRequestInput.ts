import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope } from "../inputs/ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope";
import { ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput";
import { ThreadsOnMergeRequestCreateWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateWithoutMergeRequestInput], {
    nullable: true
  })
  create?: ThreadsOnMergeRequestCreateWithoutMergeRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput], {
    nullable: true
  })
  connectOrCreate?: ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;
}
