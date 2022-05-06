import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCountAggregate } from "../outputs/VisionCountAggregate";
import { VisionMaxAggregate } from "../outputs/VisionMaxAggregate";
import { VisionMinAggregate } from "../outputs/VisionMinAggregate";

@TypeGraphQL.ObjectType("VisionGroupBy", {
  isAbstract: true
})
export class VisionGroupBy {
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
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  referenceId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  authorId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  draftMode!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  prevVisionId!: string | null;

  @TypeGraphQL.Field(_type => VisionCountAggregate, {
    nullable: true
  })
  _count!: VisionCountAggregate | null;

  @TypeGraphQL.Field(_type => VisionMinAggregate, {
    nullable: true
  })
  _min!: VisionMinAggregate | null;

  @TypeGraphQL.Field(_type => VisionMaxAggregate, {
    nullable: true
  })
  _max!: VisionMaxAggregate | null;
}
