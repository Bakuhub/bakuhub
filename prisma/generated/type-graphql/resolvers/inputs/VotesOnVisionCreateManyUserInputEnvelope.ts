import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateManyUserInput } from "../inputs/VotesOnVisionCreateManyUserInput";

@TypeGraphQL.InputType("VotesOnVisionCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class VotesOnVisionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [VotesOnVisionCreateManyUserInput], {
    nullable: false
  })
  data!: VotesOnVisionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
