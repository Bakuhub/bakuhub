import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseCountAggregate } from "../outputs/ThreadsOnPremiseCountAggregate";
import { ThreadsOnPremiseMaxAggregate } from "../outputs/ThreadsOnPremiseMaxAggregate";
import { ThreadsOnPremiseMinAggregate } from "../outputs/ThreadsOnPremiseMinAggregate";

@TypeGraphQL.ObjectType("ThreadsOnPremiseGroupBy", {
  isAbstract: true
})
export class ThreadsOnPremiseGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseCountAggregate, {
    nullable: true
  })
  _count!: ThreadsOnPremiseCountAggregate | null;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseMinAggregate, {
    nullable: true
  })
  _min!: ThreadsOnPremiseMinAggregate | null;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseMaxAggregate, {
    nullable: true
  })
  _max!: ThreadsOnPremiseMaxAggregate | null;
}
