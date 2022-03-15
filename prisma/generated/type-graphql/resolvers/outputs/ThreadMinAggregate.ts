import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ThreadMinAggregate", {
  isAbstract: true
})
export class ThreadMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  activityDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reference!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  premiseId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentThreadId!: string | null;
}
