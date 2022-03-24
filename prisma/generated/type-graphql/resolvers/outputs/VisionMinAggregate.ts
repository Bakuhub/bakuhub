import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("VisionMinAggregate", {
  isAbstract: true
})
export class VisionMinAggregate {
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
  authorId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  premiseId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  draftMode!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prevVisionId!: string | null;
}
