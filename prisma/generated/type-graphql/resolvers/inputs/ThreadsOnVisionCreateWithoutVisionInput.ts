import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateNestedOneWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnVisionInput";

@TypeGraphQL.InputType("ThreadsOnVisionCreateWithoutVisionInput", {
  isAbstract: true
})
export class ThreadsOnVisionCreateWithoutVisionInput {
  @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnVisionInput, {
    nullable: false
  })
  thread!: ThreadCreateNestedOneWithoutThreadsOnVisionInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
