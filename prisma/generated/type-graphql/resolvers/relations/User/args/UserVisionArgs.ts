import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionOrderByWithRelationInput } from "../../../inputs/VisionOrderByWithRelationInput";
import { VisionWhereInput } from "../../../inputs/VisionWhereInput";
import { VisionWhereUniqueInput } from "../../../inputs/VisionWhereUniqueInput";
import { VisionScalarFieldEnum } from "../../../../enums/VisionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserVisionArgs {
  @TypeGraphQL.Field(_type => VisionWhereInput, {
    nullable: true
  })
  where?: VisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VisionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VisionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  cursor?: VisionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VisionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "activityDate" | "description" | "createdAt" | "reference" | "authorId" | "premiseId" | "prevVisionId"> | undefined;
}
