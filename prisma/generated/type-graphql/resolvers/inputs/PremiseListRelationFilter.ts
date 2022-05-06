import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseWhereInput } from "../inputs/PremiseWhereInput";

@TypeGraphQL.InputType("PremiseListRelationFilter", {
  isAbstract: true
})
export class PremiseListRelationFilter {
  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  every?: PremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  some?: PremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  none?: PremiseWhereInput | undefined;
}
