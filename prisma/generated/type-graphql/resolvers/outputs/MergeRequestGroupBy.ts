import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCountAggregate } from "../outputs/MergeRequestCountAggregate";
import { MergeRequestMaxAggregate } from "../outputs/MergeRequestMaxAggregate";
import { MergeRequestMinAggregate } from "../outputs/MergeRequestMinAggregate";
import { MergeRequestStatus } from "../../enums/MergeRequestStatus";

@TypeGraphQL.ObjectType("MergeRequestGroupBy", {
  isAbstract: true
})
export class MergeRequestGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => MergeRequestStatus, {
    nullable: false
  })
  status!: "OPEN" | "CLOSE" | "MERGED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;

  @TypeGraphQL.Field(_type => MergeRequestCountAggregate, {
    nullable: true
  })
  _count!: MergeRequestCountAggregate | null;

  @TypeGraphQL.Field(_type => MergeRequestMinAggregate, {
    nullable: true
  })
  _min!: MergeRequestMinAggregate | null;

  @TypeGraphQL.Field(_type => MergeRequestMaxAggregate, {
    nullable: true
  })
  _max!: MergeRequestMaxAggregate | null;
}
