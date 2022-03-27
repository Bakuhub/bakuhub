import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestWhereInput } from "../inputs/MergeRequestWhereInput";

@TypeGraphQL.InputType("MergeRequestRelationFilter", {
  isAbstract: true
})
export class MergeRequestRelationFilter {
  @TypeGraphQL.Field(_type => MergeRequestWhereInput, {
    nullable: true
  })
  is?: MergeRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestWhereInput, {
    nullable: true
  })
  isNot?: MergeRequestWhereInput | undefined;
}
