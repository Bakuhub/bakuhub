import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseScalarWhereInput } from "../inputs/ThreadsOnPremiseScalarWhereInput";
import { ThreadsOnPremiseUpdateManyMutationInput } from "../inputs/ThreadsOnPremiseUpdateManyMutationInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseScalarWhereInput, {
    nullable: false
  })
  where!: ThreadsOnPremiseScalarWhereInput;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadsOnPremiseUpdateManyMutationInput;
}
