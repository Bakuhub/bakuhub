import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCountAggregate } from "../outputs/ReactionOnVisionsCountAggregate";
import { ReactionOnVisionsMaxAggregate } from "../outputs/ReactionOnVisionsMaxAggregate";
import { ReactionOnVisionsMinAggregate } from "../outputs/ReactionOnVisionsMinAggregate";

@TypeGraphQL.ObjectType("AggregateReactionOnVisions", {
  isAbstract: true
})
export class AggregateReactionOnVisions {
  @TypeGraphQL.Field(_type => ReactionOnVisionsCountAggregate, {
    nullable: true
  })
  _count!: ReactionOnVisionsCountAggregate | null;

  @TypeGraphQL.Field(_type => ReactionOnVisionsMinAggregate, {
    nullable: true
  })
  _min!: ReactionOnVisionsMinAggregate | null;

  @TypeGraphQL.Field(_type => ReactionOnVisionsMaxAggregate, {
    nullable: true
  })
  _max!: ReactionOnVisionsMaxAggregate | null;
}
