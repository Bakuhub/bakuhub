import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionCreateWithoutVisionInput } from "../inputs/ThreadsOnVisionCreateWithoutVisionInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionCreateOrConnectWithoutVisionInput", {
  isAbstract: true
})
export class ThreadsOnVisionCreateOrConnectWithoutVisionInput {
  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateWithoutVisionInput, {
    nullable: false
  })
  create!: ThreadsOnVisionCreateWithoutVisionInput;
}
