import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesAvgAggregate } from "../outputs/TagsOnPremisesAvgAggregate";
import { TagsOnPremisesCountAggregate } from "../outputs/TagsOnPremisesCountAggregate";
import { TagsOnPremisesMaxAggregate } from "../outputs/TagsOnPremisesMaxAggregate";
import { TagsOnPremisesMinAggregate } from "../outputs/TagsOnPremisesMinAggregate";
import { TagsOnPremisesSumAggregate } from "../outputs/TagsOnPremisesSumAggregate";

@TypeGraphQL.ObjectType("TagsOnPremisesGroupBy", {
  isAbstract: true
})
export class TagsOnPremisesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tagId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => TagsOnPremisesCountAggregate, {
    nullable: true
  })
  _count!: TagsOnPremisesCountAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnPremisesAvgAggregate, {
    nullable: true
  })
  _avg!: TagsOnPremisesAvgAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnPremisesSumAggregate, {
    nullable: true
  })
  _sum!: TagsOnPremisesSumAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnPremisesMinAggregate, {
    nullable: true
  })
  _min!: TagsOnPremisesMinAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnPremisesMaxAggregate, {
    nullable: true
  })
  _max!: TagsOnPremisesMaxAggregate | null;
}
