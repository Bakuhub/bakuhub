import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionOrderByWithRelationInput } from "../../../inputs/ThreadsOnVisionOrderByWithRelationInput";
import { ThreadsOnVisionWhereInput } from "../../../inputs/ThreadsOnVisionWhereInput";
import { ThreadsOnVisionWhereUniqueInput } from "../../../inputs/ThreadsOnVisionWhereUniqueInput";
import { ThreadsOnVisionScalarFieldEnum } from "../../../../enums/ThreadsOnVisionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
    nullable: true
  })
  where?: ThreadsOnVisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ThreadsOnVisionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThreadsOnVisionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"threadId" | "visionId" | "assignedAt"> | undefined;
}
