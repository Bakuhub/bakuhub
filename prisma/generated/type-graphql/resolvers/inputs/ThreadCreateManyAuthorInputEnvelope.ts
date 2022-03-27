import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateManyAuthorInput } from "../inputs/ThreadCreateManyAuthorInput";

@TypeGraphQL.InputType("ThreadCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class ThreadCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [ThreadCreateManyAuthorInput], {
    nullable: false
  })
  data!: ThreadCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
