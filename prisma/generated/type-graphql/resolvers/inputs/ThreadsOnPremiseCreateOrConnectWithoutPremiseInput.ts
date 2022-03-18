import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseCreateWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateWithoutPremiseInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../inputs/ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseCreateOrConnectWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadsOnPremiseCreateOrConnectWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: ThreadsOnPremiseCreateWithoutPremiseInput;
}
