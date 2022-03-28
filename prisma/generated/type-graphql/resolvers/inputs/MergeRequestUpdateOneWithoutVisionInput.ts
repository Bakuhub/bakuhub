import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateOrConnectWithoutVisionInput } from "../inputs/MergeRequestCreateOrConnectWithoutVisionInput";
import { MergeRequestCreateWithoutVisionInput } from "../inputs/MergeRequestCreateWithoutVisionInput";
import { MergeRequestUpdateWithoutVisionInput } from "../inputs/MergeRequestUpdateWithoutVisionInput";
import { MergeRequestUpsertWithoutVisionInput } from "../inputs/MergeRequestUpsertWithoutVisionInput";
import { MergeRequestWhereUniqueInput } from "../inputs/MergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("MergeRequestUpdateOneWithoutVisionInput", {
  isAbstract: true
})
export class MergeRequestUpdateOneWithoutVisionInput {
  @TypeGraphQL.Field(_type => MergeRequestCreateWithoutVisionInput, {
    nullable: true
  })
  create?: MergeRequestCreateWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestCreateOrConnectWithoutVisionInput, {
    nullable: true
  })
  connectOrCreate?: MergeRequestCreateOrConnectWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestUpsertWithoutVisionInput, {
    nullable: true
  })
  upsert?: MergeRequestUpsertWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
    nullable: true
  })
  connect?: MergeRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestUpdateWithoutVisionInput, {
    nullable: true
  })
  update?: MergeRequestUpdateWithoutVisionInput | undefined;
}