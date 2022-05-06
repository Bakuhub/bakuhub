import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateManyUserInput } from "../inputs/VotesOnTimelineCreateManyUserInput";

@TypeGraphQL.InputType("VotesOnTimelineCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class VotesOnTimelineCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateManyUserInput], {
    nullable: false
  })
  data!: VotesOnTimelineCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
