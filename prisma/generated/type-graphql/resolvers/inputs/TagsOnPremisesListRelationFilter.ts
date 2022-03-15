import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesWhereInput } from "../inputs/TagsOnPremisesWhereInput";

@TypeGraphQL.InputType("TagsOnPremisesListRelationFilter", {
  isAbstract: true
})
export class TagsOnPremisesListRelationFilter {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereInput, {
    nullable: true
  })
  every?: TagsOnPremisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesWhereInput, {
    nullable: true
  })
  some?: TagsOnPremisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesWhereInput, {
    nullable: true
  })
  none?: TagsOnPremisesWhereInput | undefined;
}
