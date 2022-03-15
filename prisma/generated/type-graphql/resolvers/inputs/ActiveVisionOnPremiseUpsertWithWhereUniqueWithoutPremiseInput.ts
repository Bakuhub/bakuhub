import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseCreateWithoutPremiseInput";
import { ActiveVisionOnPremiseUpdateWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseUpdateWithoutPremiseInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateWithoutPremiseInput, {
    nullable: false
  })
  update!: ActiveVisionOnPremiseUpdateWithoutPremiseInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: ActiveVisionOnPremiseCreateWithoutPremiseInput;
}
