import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionCreateWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateWithoutThreadInput";
import { ThreadsOnVisionUpdateWithoutThreadInput } from "../inputs/ThreadsOnVisionUpdateWithoutThreadInput";

@TypeGraphQL.InputType("ThreadsOnVisionUpsertWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnVisionUpsertWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateWithoutThreadInput, {
    nullable: false
  })
  update!: ThreadsOnVisionUpdateWithoutThreadInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutThreadInput, {
    nullable: false
  })
  create!: ThreadsOnVisionCreateWithoutThreadInput;
}
