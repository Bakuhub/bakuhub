import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ThreadsOnVisionCreateManyVisionInput", {
  isAbstract: true
})
export class ThreadsOnVisionCreateManyVisionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
