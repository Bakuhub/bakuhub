import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineOrderByWithRelationInput } from "../../../inputs/TimelineOrderByWithRelationInput";
import { TimelineWhereInput } from "../../../inputs/TimelineWhereInput";
import { TimelineWhereUniqueInput } from "../../../inputs/TimelineWhereUniqueInput";
import { TimelineScalarFieldEnum } from "../../../../enums/TimelineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTimelineArgs {
  @TypeGraphQL.Field(_type => TimelineWhereInput, {
    nullable: true
  })
  where?: TimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TimelineOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TimelineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  cursor?: TimelineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TimelineScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "description" | "status" | "authorId"> | undefined;
}
