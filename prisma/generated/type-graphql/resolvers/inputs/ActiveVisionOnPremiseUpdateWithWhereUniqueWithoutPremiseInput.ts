import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseUpdateWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseUpdateWithoutPremiseInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateWithoutPremiseInput, {
    nullable: false
  })
  data!: ActiveVisionOnPremiseUpdateWithoutPremiseInput;
}
