import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutVisionInput } from "../inputs/PremiseCreateWithoutVisionInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutVisionInput", {
  isAbstract: true
})
export class PremiseCreateOrConnectWithoutVisionInput {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutVisionInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutVisionInput;
}
