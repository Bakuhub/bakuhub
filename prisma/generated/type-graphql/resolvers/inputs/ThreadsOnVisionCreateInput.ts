import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateNestedOneWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnVisionInput";
import { VisionCreateNestedOneWithoutThreadsOnVisionInput } from "../inputs/VisionCreateNestedOneWithoutThreadsOnVisionInput";

@TypeGraphQL.InputType("ThreadsOnVisionCreateInput", {
  isAbstract: true
})
export class ThreadsOnVisionCreateInput {
  @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnVisionInput, {
    nullable: false
  })
  thread!: ThreadCreateNestedOneWithoutThreadsOnVisionInput;

  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutThreadsOnVisionInput, {
    nullable: false
  })
  vision!: VisionCreateNestedOneWithoutThreadsOnVisionInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
