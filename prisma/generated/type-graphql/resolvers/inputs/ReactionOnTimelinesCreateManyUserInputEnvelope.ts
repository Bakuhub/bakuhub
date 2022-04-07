import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateManyUserInput } from "../inputs/ReactionOnTimelinesCreateManyUserInput";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateManyUserInput], {
    nullable: false
  })
  data!: ReactionOnTimelinesCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
