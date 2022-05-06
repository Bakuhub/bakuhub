import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateManyVisionInput } from "../inputs/VotesOnVisionCreateManyVisionInput";

@TypeGraphQL.InputType("VotesOnVisionCreateManyVisionInputEnvelope", {
  isAbstract: true
})
export class VotesOnVisionCreateManyVisionInputEnvelope {
  @TypeGraphQL.Field(_type => [VotesOnVisionCreateManyVisionInput], {
    nullable: false
  })
  data!: VotesOnVisionCreateManyVisionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
