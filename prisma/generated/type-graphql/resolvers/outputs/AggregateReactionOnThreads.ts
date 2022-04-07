import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCountAggregate } from "../outputs/ReactionOnThreadsCountAggregate";
import { ReactionOnThreadsMaxAggregate } from "../outputs/ReactionOnThreadsMaxAggregate";
import { ReactionOnThreadsMinAggregate } from "../outputs/ReactionOnThreadsMinAggregate";

@TypeGraphQL.ObjectType("AggregateReactionOnThreads", {
  isAbstract: true
})
export class AggregateReactionOnThreads {
  @TypeGraphQL.Field(_type => ReactionOnThreadsCountAggregate, {
    nullable: true
  })
  _count!: ReactionOnThreadsCountAggregate | null;

  @TypeGraphQL.Field(_type => ReactionOnThreadsMinAggregate, {
    nullable: true
  })
  _min!: ReactionOnThreadsMinAggregate | null;

  @TypeGraphQL.Field(_type => ReactionOnThreadsMaxAggregate, {
    nullable: true
  })
  _max!: ReactionOnThreadsMaxAggregate | null;
}
