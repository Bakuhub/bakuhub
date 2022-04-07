import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateManyUserInput } from "../inputs/ReactionOnVisionsCreateManyUserInput";

@TypeGraphQL.InputType("ReactionOnVisionsCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ReactionOnVisionsCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsCreateManyUserInput], {
    nullable: false
  })
  data!: ReactionOnVisionsCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
