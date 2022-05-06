import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateNestedOneWithoutThreadsOnVisionInput } from "../inputs/VisionCreateNestedOneWithoutThreadsOnVisionInput";

@TypeGraphQL.InputType("ThreadsOnVisionCreateWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnVisionCreateWithoutThreadInput {
  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutThreadsOnVisionInput, {
    nullable: false
  })
  vision!: VisionCreateNestedOneWithoutThreadsOnVisionInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
