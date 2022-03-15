import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput";
import { PremiseCreateWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseCreateWithoutActiveVisionOnPremiseInput";
import { PremiseUpdateWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseUpdateWithoutActiveVisionOnPremiseInput";
import { PremiseUpsertWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseUpsertWithoutActiveVisionOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput", {
  isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutActiveVisionOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpsertWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  upsert?: PremiseUpsertWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  update?: PremiseUpdateWithoutActiveVisionOnPremiseInput | undefined;
}
