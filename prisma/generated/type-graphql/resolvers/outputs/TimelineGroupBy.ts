import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCountAggregate } from "../outputs/TimelineCountAggregate";
import { TimelineMaxAggregate } from "../outputs/TimelineMaxAggregate";
import { TimelineMinAggregate } from "../outputs/TimelineMinAggregate";

@TypeGraphQL.ObjectType("TimelineGroupBy", {
  isAbstract: true
})
export class TimelineGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  @TypeGraphQL.Field(_type => TimelineCountAggregate, {
    nullable: true
  })
  _count!: TimelineCountAggregate | null;

  @TypeGraphQL.Field(_type => TimelineMinAggregate, {
    nullable: true
  })
  _min!: TimelineMinAggregate | null;

  @TypeGraphQL.Field(_type => TimelineMaxAggregate, {
    nullable: true
  })
  _max!: TimelineMaxAggregate | null;
}
