import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseCountAggregate } from "../outputs/ActiveVisionOnPremiseCountAggregate";
import { ActiveVisionOnPremiseMaxAggregate } from "../outputs/ActiveVisionOnPremiseMaxAggregate";
import { ActiveVisionOnPremiseMinAggregate } from "../outputs/ActiveVisionOnPremiseMinAggregate";

@TypeGraphQL.ObjectType("ActiveVisionOnPremiseGroupBy", {
  isAbstract: true
})
export class ActiveVisionOnPremiseGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;

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
