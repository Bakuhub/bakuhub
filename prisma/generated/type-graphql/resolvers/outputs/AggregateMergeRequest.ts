import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCountAggregate } from "../outputs/MergeRequestCountAggregate";
import { MergeRequestMaxAggregate } from "../outputs/MergeRequestMaxAggregate";
import { MergeRequestMinAggregate } from "../outputs/MergeRequestMinAggregate";

@TypeGraphQL.ObjectType("AggregateMergeRequest", {
  isAbstract: true
})
export class AggregateMergeRequest {
  @TypeGraphQL.Field(_type => MergeRequestCountAggregate, {
    nullable: true
  })
  _count!: MergeRequestCountAggregate | null;

  @TypeGraphQL.Field(_type => MergeRequestMinAggregate, {
    nullable: true
  })
  _min!: MergeRequestMinAggregate | null;

  @TypeGraphQL.Field(_type => MergeRequestMaxAggregate, {
    nullable: true
  })
  _max!: MergeRequestMaxAggregate | null;
}
