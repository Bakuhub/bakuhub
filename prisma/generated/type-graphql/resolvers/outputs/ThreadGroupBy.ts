import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCountAggregate } from "../outputs/ThreadCountAggregate";
import { ThreadMaxAggregate } from "../outputs/ThreadMaxAggregate";
import { ThreadMinAggregate } from "../outputs/ThreadMinAggregate";

@TypeGraphQL.ObjectType("ThreadGroupBy", {
  isAbstract: true
})
export class ThreadGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  activityDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reference!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  authorId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentThreadId!: string | null;

  @TypeGraphQL.Field(_type => ThreadCountAggregate, {
    nullable: true
  })
  _count!: ThreadCountAggregate | null;

  @TypeGraphQL.Field(_type => ThreadMinAggregate, {
    nullable: true
  })
  _min!: ThreadMinAggregate | null;

  @TypeGraphQL.Field(_type => ThreadMaxAggregate, {
    nullable: true
  })
  _max!: ThreadMaxAggregate | null;
}
