import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCreateManyTimelineInput } from "../inputs/PremisesOnTimelinesCreateManyTimelineInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateManyTimelineInputEnvelope", {
  isAbstract: true
})
export class PremisesOnTimelinesCreateManyTimelineInputEnvelope {
  @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateManyTimelineInput], {
    nullable: false
  })
  data!: PremisesOnTimelinesCreateManyTimelineInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
