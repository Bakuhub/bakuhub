import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseWhereInput } from "../inputs/ActiveVisionOnPremiseWhereInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseListRelationFilter", {
  isAbstract: true
})
export class ActiveVisionOnPremiseListRelationFilter {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereInput, {
    nullable: true
  })
  every?: ActiveVisionOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereInput, {
    nullable: true
  })
  some?: ActiveVisionOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereInput, {
    nullable: true
  })
  none?: ActiveVisionOnPremiseWhereInput | undefined;
}
