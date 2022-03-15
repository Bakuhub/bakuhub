import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseCreateWithoutVisionInput";
import { ActiveVisionOnPremiseUpdateWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseUpdateWithoutVisionInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutVisionInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpsertWithWhereUniqueWithoutVisionInput {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateWithoutVisionInput, {
    nullable: false
  })
  update!: ActiveVisionOnPremiseUpdateWithoutVisionInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateWithoutVisionInput, {
    nullable: false
  })
  create!: ActiveVisionOnPremiseCreateWithoutVisionInput;
}
