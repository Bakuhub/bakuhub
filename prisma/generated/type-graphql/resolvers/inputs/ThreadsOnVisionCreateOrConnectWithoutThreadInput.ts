import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionCreateWithoutThreadInput } from "../inputs/ThreadsOnVisionCreateWithoutThreadInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionCreateOrConnectWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnVisionCreateOrConnectWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutThreadInput, {
    nullable: false
  })
  create!: ThreadsOnVisionCreateWithoutThreadInput;
}
