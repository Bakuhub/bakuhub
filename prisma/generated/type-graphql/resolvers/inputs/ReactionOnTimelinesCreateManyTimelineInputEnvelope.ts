import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCreateManyTimelineInput } from "../inputs/ReactionOnTimelinesCreateManyTimelineInput";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateManyTimelineInputEnvelope", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateManyTimelineInputEnvelope {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateManyTimelineInput], {
    nullable: false
  })
  data!: ReactionOnTimelinesCreateManyTimelineInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
