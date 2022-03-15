import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesWhereInput } from "../inputs/TagsOnTimelinesWhereInput";

@TypeGraphQL.InputType("TagsOnTimelinesListRelationFilter", {
  isAbstract: true
})
export class TagsOnTimelinesListRelationFilter {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput, {
    nullable: true
  })
  every?: TagsOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput, {
    nullable: true
  })
  some?: TagsOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput, {
    nullable: true
  })
  none?: TagsOnTimelinesWhereInput | undefined;
}
