import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ActiveVisionOnPremise } from "../models/ActiveVisionOnPremise";
import { Premise } from "../models/Premise";
import { User } from "../models/User";
import { VisionCount } from "../resolvers/outputs/VisionCount";

@TypeGraphQL.ObjectType("Vision", {
  isAbstract: true
})
export class Vision {
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

  author?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  premise?: Premise;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  activeVisionOnPremise?: ActiveVisionOnPremise[];

  @TypeGraphQL.Field(_type => VisionCount, {
    nullable: true
  })
  _count?: VisionCount | null;
}
