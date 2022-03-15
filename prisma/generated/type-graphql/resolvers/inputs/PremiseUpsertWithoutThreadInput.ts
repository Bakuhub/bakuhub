import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutThreadInput } from "../inputs/PremiseCreateWithoutThreadInput";
import { PremiseUpdateWithoutThreadInput } from "../inputs/PremiseUpdateWithoutThreadInput";

@TypeGraphQL.InputType("PremiseUpsertWithoutThreadInput", {
  isAbstract: true
})
export class PremiseUpsertWithoutThreadInput {
  @TypeGraphQL.Field(_type => PremiseUpdateWithoutThreadInput, {
    nullable: false
  })
  update!: PremiseUpdateWithoutThreadInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutThreadInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutThreadInput;
}
