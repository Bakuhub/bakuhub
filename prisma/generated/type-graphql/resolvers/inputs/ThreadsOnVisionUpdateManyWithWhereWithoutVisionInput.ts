import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionScalarWhereInput } from "../inputs/ThreadsOnVisionScalarWhereInput";
import { ThreadsOnVisionUpdateManyMutationInput } from "../inputs/ThreadsOnVisionUpdateManyMutationInput";

@TypeGraphQL.InputType("ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput", {
  isAbstract: true
})
export class ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput {
  @TypeGraphQL.Field(_type => ThreadsOnVisionScalarWhereInput, {
    nullable: false
  })
  where!: ThreadsOnVisionScalarWhereInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadsOnVisionUpdateManyMutationInput;
}
