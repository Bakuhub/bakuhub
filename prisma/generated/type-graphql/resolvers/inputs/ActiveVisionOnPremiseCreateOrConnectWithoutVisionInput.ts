import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseCreateWithoutVisionInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateOrConnectWithoutVisionInput {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateWithoutVisionInput, {
    nullable: false
  })
  create!: ActiveVisionOnPremiseCreateWithoutVisionInput;
}
