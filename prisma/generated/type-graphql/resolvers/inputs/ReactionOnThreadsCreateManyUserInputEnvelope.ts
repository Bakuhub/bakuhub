import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCreateManyUserInput } from "../inputs/ReactionOnThreadsCreateManyUserInput";

@TypeGraphQL.InputType("ReactionOnThreadsCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ReactionOnThreadsCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsCreateManyUserInput], {
    nullable: false
  })
  data!: ReactionOnThreadsCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
