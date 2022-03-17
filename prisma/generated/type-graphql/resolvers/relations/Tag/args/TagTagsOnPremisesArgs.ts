import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesOrderByWithRelationInput } from "../../../inputs/TagsOnPremisesOrderByWithRelationInput";
import { TagsOnPremisesWhereInput } from "../../../inputs/TagsOnPremisesWhereInput";
import { TagsOnPremisesWhereUniqueInput } from "../../../inputs/TagsOnPremisesWhereUniqueInput";
import { TagsOnPremisesScalarFieldEnum } from "../../../../enums/TagsOnPremisesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TagTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereInput, {
    nullable: true
  })
  where?: TagsOnPremisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TagsOnPremisesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
    nullable: true
  })
  cursor?: TagsOnPremisesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tagId" | "premiseId" | "assignedAt"> | undefined;
}