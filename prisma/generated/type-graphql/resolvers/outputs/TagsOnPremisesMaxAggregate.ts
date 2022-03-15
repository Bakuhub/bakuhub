import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TagsOnPremisesMaxAggregate", {
  isAbstract: true
})
export class TagsOnPremisesMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tagId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  premiseId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt!: Date | null;
}
