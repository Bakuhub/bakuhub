import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateNestedOneWithoutThreadsOnPremiseInput";

@TypeGraphQL.InputType("ThreadsOnPremiseCreateWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnPremiseCreateWithoutThreadInput {
  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutThreadsOnPremiseInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutThreadsOnPremiseInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
