import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutThreadsOnPremiseInput } from "../inputs/PremiseCreateNestedOneWithoutThreadsOnPremiseInput";
import { ThreadCreateNestedOneWithoutThreadsOnPremiseInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnPremiseInput";

@TypeGraphQL.InputType("ThreadsOnPremiseCreateInput", {
  isAbstract: true
})
export class ThreadsOnPremiseCreateInput {
  @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnPremiseInput, {
    nullable: false
  })
  thread!: ThreadCreateNestedOneWithoutThreadsOnPremiseInput;

  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutThreadsOnPremiseInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutThreadsOnPremiseInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
