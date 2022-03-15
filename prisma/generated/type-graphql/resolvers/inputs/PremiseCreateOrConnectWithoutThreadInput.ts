import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutThreadInput } from "../inputs/PremiseCreateWithoutThreadInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutThreadInput", {
  isAbstract: true
})
export class PremiseCreateOrConnectWithoutThreadInput {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutThreadInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutThreadInput;
}
