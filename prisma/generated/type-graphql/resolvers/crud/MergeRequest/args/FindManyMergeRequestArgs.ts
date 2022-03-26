import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestOrderByWithRelationInput } from "../../../inputs/MergeRequestOrderByWithRelationInput";
import { MergeRequestWhereInput } from "../../../inputs/MergeRequestWhereInput";
import { MergeRequestWhereUniqueInput } from "../../../inputs/MergeRequestWhereUniqueInput";
import { MergeRequestScalarFieldEnum } from "../../../../enums/MergeRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMergeRequestArgs {
  @TypeGraphQL.Field(_type => MergeRequestWhereInput, {
    nullable: true
  })
  where?: MergeRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MergeRequestOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MergeRequestOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
    nullable: true
  })
  cursor?: MergeRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MergeRequestScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "description" | "status" | "visionId"> | undefined;
}
