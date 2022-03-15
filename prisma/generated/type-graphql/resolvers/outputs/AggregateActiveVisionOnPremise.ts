import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCountAggregate } from "../outputs/ActiveVisionOnPremiseCountAggregate";
import { ActiveVisionOnPremiseMaxAggregate } from "../outputs/ActiveVisionOnPremiseMaxAggregate";
import { ActiveVisionOnPremiseMinAggregate } from "../outputs/ActiveVisionOnPremiseMinAggregate";

@TypeGraphQL.ObjectType("AggregateActiveVisionOnPremise", {
  isAbstract: true
})
export class AggregateActiveVisionOnPremise {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseCountAggregate, {
    nullable: true
  })
  _count!: ActiveVisionOnPremiseCountAggregate | null;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseMinAggregate, {
    nullable: true
  })
  _min!: ActiveVisionOnPremiseMinAggregate | null;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseMaxAggregate, {
    nullable: true
  })
  _max!: ActiveVisionOnPremiseMaxAggregate | null;
}
