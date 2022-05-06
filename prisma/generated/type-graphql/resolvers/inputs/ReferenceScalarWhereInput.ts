import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReferenceScalarWhereInput", {
  isAbstract: true
})
export class ReferenceScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReferenceScalarWhereInput], {
    nullable: true
  })
  AND?: ReferenceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceScalarWhereInput], {
    nullable: true
  })
  OR?: ReferenceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceScalarWhereInput], {
    nullable: true
  })
  NOT?: ReferenceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;
}
