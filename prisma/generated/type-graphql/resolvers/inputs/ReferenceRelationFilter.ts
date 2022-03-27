import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceWhereInput } from "../inputs/ReferenceWhereInput";

@TypeGraphQL.InputType("ReferenceRelationFilter", {
  isAbstract: true
})
export class ReferenceRelationFilter {
  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  is?: ReferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  isNot?: ReferenceWhereInput | undefined;
}
