import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";

@TypeGraphQL.InputType("ActiveVisionOnPremiseWhereInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseWhereInput {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereInput], {
    nullable: true
  })
  AND?: ActiveVisionOnPremiseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereInput], {
    nullable: true
  })
  OR?: ActiveVisionOnPremiseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseWhereInput], {
    nullable: true
  })
  NOT?: ActiveVisionOnPremiseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => PremiseRelationFilter, {
    nullable: true
  })
  premise?: PremiseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => VisionRelationFilter, {
    nullable: true
  })
  vision?: VisionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  visionId?: StringFilter | undefined;
}
