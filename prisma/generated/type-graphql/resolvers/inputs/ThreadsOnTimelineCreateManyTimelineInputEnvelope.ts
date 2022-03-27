import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnTimelineCreateManyTimelineInput } from "../inputs/ThreadsOnTimelineCreateManyTimelineInput";

@TypeGraphQL.InputType("ThreadsOnTimelineCreateManyTimelineInputEnvelope", {
  isAbstract: true
})
export class ThreadsOnTimelineCreateManyTimelineInputEnvelope {
  @TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateManyTimelineInput], {
    nullable: false
  })
  data!: ThreadsOnTimelineCreateManyTimelineInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
