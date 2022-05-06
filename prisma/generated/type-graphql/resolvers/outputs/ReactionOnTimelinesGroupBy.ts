import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCountAggregate } from "../outputs/ReactionOnTimelinesCountAggregate";
import { ReactionOnTimelinesMaxAggregate } from "../outputs/ReactionOnTimelinesMaxAggregate";
import { ReactionOnTimelinesMinAggregate } from "../outputs/ReactionOnTimelinesMinAggregate";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.ObjectType("ReactionOnTimelinesGroupBy", {
  isAbstract: true
})
export class ReactionOnTimelinesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCountAggregate, {
    nullable: true
  })
  _count!: ReactionOnTimelinesCountAggregate | null;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesMinAggregate, {
    nullable: true
  })
  _min!: ReactionOnTimelinesMinAggregate | null;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesMaxAggregate, {
    nullable: true
  })
  _max!: ReactionOnTimelinesMaxAggregate | null;
}
