import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutTagsOnPremisesInput } from "../inputs/PremiseCreateWithoutTagsOnPremisesInput";
import { PremiseUpdateWithoutTagsOnPremisesInput } from "../inputs/PremiseUpdateWithoutTagsOnPremisesInput";

@TypeGraphQL.InputType("PremiseUpsertWithoutTagsOnPremisesInput", {
  isAbstract: true
})
export class PremiseUpsertWithoutTagsOnPremisesInput {
  @TypeGraphQL.Field(_type => PremiseUpdateWithoutTagsOnPremisesInput, {
    nullable: false
  })
  update!: PremiseUpdateWithoutTagsOnPremisesInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutTagsOnPremisesInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutTagsOnPremisesInput;
}
