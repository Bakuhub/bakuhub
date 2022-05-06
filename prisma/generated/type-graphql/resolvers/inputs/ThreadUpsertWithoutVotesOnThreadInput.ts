import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutVotesOnThreadInput } from "../inputs/ThreadCreateWithoutVotesOnThreadInput";
import { ThreadUpdateWithoutVotesOnThreadInput } from "../inputs/ThreadUpdateWithoutVotesOnThreadInput";

@TypeGraphQL.InputType("ThreadUpsertWithoutVotesOnThreadInput", {
  isAbstract: true
})
export class ThreadUpsertWithoutVotesOnThreadInput {
  @TypeGraphQL.Field(_type => ThreadUpdateWithoutVotesOnThreadInput, {
    nullable: false
  })
  update!: ThreadUpdateWithoutVotesOnThreadInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutVotesOnThreadInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutVotesOnThreadInput;
}
