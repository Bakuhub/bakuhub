import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput";
import { MergeRequestCreateWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput";
import { MergeRequestUpdateWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestUpdateWithoutThreadsOnMergeRequestInput";
import { MergeRequestUpsertWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestUpsertWithoutThreadsOnMergeRequestInput";
import { MergeRequestWhereUniqueInput } from "../inputs/MergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput", {
  isAbstract: true
})
export class MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput {
  @TypeGraphQL.Field(_type => MergeRequestCreateWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  create?: MergeRequestCreateWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  connectOrCreate?: MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestUpsertWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  upsert?: MergeRequestUpsertWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
    nullable: true
  })
  connect?: MergeRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestUpdateWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  update?: MergeRequestUpdateWithoutThreadsOnMergeRequestInput | undefined;
}
