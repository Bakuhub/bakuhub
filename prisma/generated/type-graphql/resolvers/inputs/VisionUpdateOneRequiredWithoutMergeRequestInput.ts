import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateOrConnectWithoutMergeRequestInput } from "../inputs/VisionCreateOrConnectWithoutMergeRequestInput";
import { VisionCreateWithoutMergeRequestInput } from "../inputs/VisionCreateWithoutMergeRequestInput";
import { VisionUpdateWithoutMergeRequestInput } from "../inputs/VisionUpdateWithoutMergeRequestInput";
import { VisionUpsertWithoutMergeRequestInput } from "../inputs/VisionUpsertWithoutMergeRequestInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutMergeRequestInput", {
  isAbstract: true
})
export class VisionUpdateOneRequiredWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => VisionCreateWithoutMergeRequestInput, {
    nullable: true
  })
  create?: VisionCreateWithoutMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutMergeRequestInput, {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpsertWithoutMergeRequestInput, {
    nullable: true
  })
  upsert?: VisionUpsertWithoutMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  connect?: VisionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutMergeRequestInput, {
    nullable: true
  })
  update?: VisionUpdateWithoutMergeRequestInput | undefined;
}