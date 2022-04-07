import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsCountAggregate } from "../outputs/ReactionOnThreadsCountAggregate";
import { ReactionOnThreadsMaxAggregate } from "../outputs/ReactionOnThreadsMaxAggregate";
import { ReactionOnThreadsMinAggregate } from "../outputs/ReactionOnThreadsMinAggregate";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.ObjectType("ReactionOnThreadsGroupBy", {
  isAbstract: true
})
export class ReactionOnThreadsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
