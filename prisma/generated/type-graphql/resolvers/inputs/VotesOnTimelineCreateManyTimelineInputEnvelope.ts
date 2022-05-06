import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateManyTimelineInput } from "../inputs/VotesOnTimelineCreateManyTimelineInput";

@TypeGraphQL.InputType("VotesOnTimelineCreateManyTimelineInputEnvelope", {
  isAbstract: true
})
export class VotesOnTimelineCreateManyTimelineInputEnvelope {
  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateManyTimelineInput], {
    nullable: false
  })
  data!: VotesOnTimelineCreateManyTimelineInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
