import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateOrConnectWithoutTagsOnPremisesInput";
import { PremiseCreateWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateWithoutTagsOnPremisesInput";
import { PremiseUpdateWithoutTagsOnPremisesInput } from "../inputs/PremiseUpdateWithoutTagsOnPremisesInput";
import { PremiseUpsertWithoutTagsOnPremisesInput } from "../inputs/PremiseUpsertWithoutTagsOnPremisesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutTagsOnPremisesInput", {
  isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutTagsOnPremisesInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutTagsOnPremisesInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutTagsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutTagsOnPremisesInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutTagsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpsertWithoutTagsOnPremisesInput, {
    nullable: true
  })
  upsert?: PremiseUpsertWithoutTagsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateWithoutTagsOnPremisesInput, {
    nullable: true
  })
  update?: PremiseUpdateWithoutTagsOnPremisesInput | undefined;
}
