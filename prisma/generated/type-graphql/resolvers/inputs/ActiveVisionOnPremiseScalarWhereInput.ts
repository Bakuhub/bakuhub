import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActiveVisionOnPremiseScalarWhereInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseScalarWhereInput {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarWhereInput], {
    nullable: true
  })
  AND?: ActiveVisionOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarWhereInput], {
    nullable: true
  })
  OR?: ActiveVisionOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarWhereInput], {
    nullable: true
  })
  NOT?: ActiveVisionOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  visionId?: StringFilter | undefined;
}
