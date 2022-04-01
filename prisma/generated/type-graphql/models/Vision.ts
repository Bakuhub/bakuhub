import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MergeRequest } from "../models/MergeRequest";
import { Premise } from "../models/Premise";
import { Reference } from "../models/Reference";
import { ThreadsOnVision } from "../models/ThreadsOnVision";
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
    nullable: true
  })
  activityDate?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  reference?: Reference | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  referenceId?: string | null;

  author?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  authorId?: string | null;

  premise?: Premise;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | null;

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
  prevVisionId?: string | null;

  prevVision?: Vision | null;

  nextVisions?: Vision[];

  threadsOnVision?: ThreadsOnVision[];

  mergeRequest?: MergeRequest | null;

  @TypeGraphQL.Field(_type => VisionCount, {
    nullable: true
  })
  _count?: VisionCount | null;
}
