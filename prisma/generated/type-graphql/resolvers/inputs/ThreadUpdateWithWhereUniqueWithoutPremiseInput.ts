import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadUpdateWithoutPremiseInput } from "../inputs/ThreadUpdateWithoutPremiseInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadUpdateWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadUpdateWithoutPremiseInput, {
    nullable: false
  })
  data!: ThreadUpdateWithoutPremiseInput;
}
