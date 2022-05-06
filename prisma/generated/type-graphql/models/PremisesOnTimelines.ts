import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Premise } from "../models/Premise";
import { Timeline } from "../models/Timeline";

@TypeGraphQL.ObjectType("PremisesOnTimelines", {
  isAbstract: true
})
export class PremisesOnTimelines {
  timeline?: Timeline;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;

  premise?: Premise;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;
}
