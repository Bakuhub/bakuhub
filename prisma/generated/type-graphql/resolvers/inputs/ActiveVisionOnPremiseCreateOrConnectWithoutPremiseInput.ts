import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCreateWithoutPremiseInput } from "../inputs/ActiveVisionOnPremiseCreateWithoutPremiseInput";
import { ActiveVisionOnPremiseWhereUniqueInput } from "../inputs/ActiveVisionOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateOrConnectWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ActiveVisionOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: ActiveVisionOnPremiseCreateWithoutPremiseInput;
}
