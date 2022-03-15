import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseUpdateWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseUpdateWithoutVisionInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutVisionInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseUpdateWithWhereUniqueWithoutVisionInput {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateWithoutVisionInput, {
    nullable: false
  })
  data!: ActiveVisionOnPremiseUpdateWithoutVisionInput;
}
