import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadScalarWhereInput } from "../inputs/ThreadScalarWhereInput";
import { ThreadUpdateManyMutationInput } from "../inputs/ThreadUpdateManyMutationInput";

@TypeGraphQL.InputType("ThreadUpdateManyWithWhereWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadUpdateManyWithWhereWithoutPremiseInput {
  @TypeGraphQL.Field(_type => ThreadScalarWhereInput, {
    nullable: false
  })
  where!: ThreadScalarWhereInput;

  @TypeGraphQL.Field(_type => ThreadUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadUpdateManyMutationInput;
}
