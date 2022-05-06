import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceWhereInput } from "../inputs/ReferenceWhereInput";

@TypeGraphQL.InputType("ReferenceListRelationFilter", {
  isAbstract: true
})
export class ReferenceListRelationFilter {
  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  every?: ReferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  some?: ReferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  none?: ReferenceWhereInput | undefined;
}
