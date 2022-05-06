import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateWithoutReactionOnThreadsInput";
import { ThreadUpdateWithoutReactionOnThreadsInput } from "../inputs/ThreadUpdateWithoutReactionOnThreadsInput";

@TypeGraphQL.InputType("ThreadUpsertWithoutReactionOnThreadsInput", {
  isAbstract: true
})
export class ThreadUpsertWithoutReactionOnThreadsInput {
  @TypeGraphQL.Field(_type => ThreadUpdateWithoutReactionOnThreadsInput, {
    nullable: false
  })
  update!: ThreadUpdateWithoutReactionOnThreadsInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutReactionOnThreadsInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutReactionOnThreadsInput;
}
