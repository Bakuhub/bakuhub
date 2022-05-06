import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionWhereInput } from "../inputs/VisionWhereInput";

@TypeGraphQL.InputType("VisionRelationFilter", {
  isAbstract: true
})
export class VisionRelationFilter {
  @TypeGraphQL.Field(_type => VisionWhereInput, {
    nullable: true
  })
  is?: VisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VisionWhereInput, {
    nullable: true
  })
  isNot?: VisionWhereInput | undefined;
}
