import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCountAggregate } from "../outputs/PremisesOnTimelinesCountAggregate";
import { PremisesOnTimelinesMaxAggregate } from "../outputs/PremisesOnTimelinesMaxAggregate";
import { PremisesOnTimelinesMinAggregate } from "../outputs/PremisesOnTimelinesMinAggregate";

@TypeGraphQL.ObjectType("PremisesOnTimelinesGroupBy", {
  isAbstract: true
})
export class PremisesOnTimelinesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesCountAggregate, {
    nullable: true
  })
  _count!: PremisesOnTimelinesCountAggregate | null;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesMinAggregate, {
    nullable: true
  })
  _min!: PremisesOnTimelinesMinAggregate | null;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesMaxAggregate, {
    nullable: true
  })
  _max!: PremisesOnTimelinesMaxAggregate | null;
}
