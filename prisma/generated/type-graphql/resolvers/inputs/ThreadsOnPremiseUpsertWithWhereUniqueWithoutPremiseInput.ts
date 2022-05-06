import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseCreateWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateWithoutPremiseInput";
import { ThreadsOnPremiseUpdateWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpdateWithoutPremiseInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../inputs/ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateWithoutPremiseInput, {
    nullable: false
  })
  update!: ThreadsOnPremiseUpdateWithoutPremiseInput;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: ThreadsOnPremiseCreateWithoutPremiseInput;
}
