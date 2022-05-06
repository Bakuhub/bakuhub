import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCountAggregate } from "../outputs/ReactionOnVisionsCountAggregate";
import { ReactionOnVisionsMaxAggregate } from "../outputs/ReactionOnVisionsMaxAggregate";
import { ReactionOnVisionsMinAggregate } from "../outputs/ReactionOnVisionsMinAggregate";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.ObjectType("ReactionOnVisionsGroupBy", {
  isAbstract: true
})
export class ReactionOnVisionsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
