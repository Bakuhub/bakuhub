import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutPremiseInput } from "../inputs/ThreadCreateWithoutPremiseInput";
import { ThreadUpdateWithoutPremiseInput } from "../inputs/ThreadUpdateWithoutPremiseInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpsertWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadUpsertWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadUpdateWithoutPremiseInput, {
    nullable: false
  })
  update!: ThreadUpdateWithoutPremiseInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutPremiseInput;
}
