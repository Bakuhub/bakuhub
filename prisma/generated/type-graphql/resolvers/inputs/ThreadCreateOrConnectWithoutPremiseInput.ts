import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutPremiseInput } from "../inputs/ThreadCreateWithoutPremiseInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadCreateOrConnectWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutPremiseInput;
}
