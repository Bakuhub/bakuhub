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
    nullable: false
  })
  activityDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reference!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

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
