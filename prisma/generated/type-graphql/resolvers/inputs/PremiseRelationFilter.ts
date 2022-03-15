import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseWhereInput } from "../inputs/PremiseWhereInput";

@TypeGraphQL.InputType("PremiseRelationFilter", {
  isAbstract: true
})
export class PremiseRelationFilter {
  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  is?: PremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  isNot?: PremiseWhereInput | undefined;
}
