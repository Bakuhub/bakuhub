import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutAuthorInput } from "../inputs/ThreadCreateWithoutAuthorInput";
import { ThreadUpdateWithoutAuthorInput } from "../inputs/ThreadUpdateWithoutAuthorInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class ThreadUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: ThreadUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutAuthorInput;
}
