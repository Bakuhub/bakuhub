import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestStatus } from "../../enums/MergeRequestStatus";

@TypeGraphQL.ObjectType("MergeRequestMinAggregate", {
  isAbstract: true
})
export class MergeRequestMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => MergeRequestStatus, {
    nullable: true
  })
  status!: "OPEN" | "CLOSE" | "MERGED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visionId!: string | null;
}
