import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionUpdateWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateWithoutVisionInput";
import { ThreadsOnVisionWhereUniqueInput } from "../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput", {
  isAbstract: true
})
export class ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput {
  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateWithoutVisionInput, {
    nullable: false
  })
  data!: ThreadsOnVisionUpdateWithoutVisionInput;
}
