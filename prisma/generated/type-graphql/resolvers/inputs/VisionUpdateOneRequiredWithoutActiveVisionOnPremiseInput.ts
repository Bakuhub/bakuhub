import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateOrConnectWithoutActiveVisionOnPremiseInput } from "../inputs/VisionCreateOrConnectWithoutActiveVisionOnPremiseInput";
import { VisionCreateWithoutActiveVisionOnPremiseInput } from "../inputs/VisionCreateWithoutActiveVisionOnPremiseInput";
import { VisionUpdateWithoutActiveVisionOnPremiseInput } from "../inputs/VisionUpdateWithoutActiveVisionOnPremiseInput";
import { VisionUpsertWithoutActiveVisionOnPremiseInput } from "../inputs/VisionUpsertWithoutActiveVisionOnPremiseInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput", {
  isAbstract: true
})
export class VisionUpdateOneRequiredWithoutActiveVisionOnPremiseInput {
  @TypeGraphQL.Field(_type => VisionCreateWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  create?: VisionCreateWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpsertWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  upsert?: VisionUpsertWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  connect?: VisionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  update?: VisionUpdateWithoutActiveVisionOnPremiseInput | undefined;
}
