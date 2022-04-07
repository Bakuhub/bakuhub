import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnVisionsOrderByWithRelationInput } from "../../../inputs/ReactionOnVisionsOrderByWithRelationInput";
import { ReactionOnVisionsWhereInput } from "../../../inputs/ReactionOnVisionsWhereInput";
import { ReactionOnVisionsWhereUniqueInput } from "../../../inputs/ReactionOnVisionsWhereUniqueInput";
import { ReactionOnVisionsScalarFieldEnum } from "../../../../enums/ReactionOnVisionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyReactionOnVisionsArgs {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput, {
    nullable: true
  })
  where?: ReactionOnVisionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReactionOnVisionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReactionOnVisionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "visionId" | "reaction" | "createdAt"> | undefined;
}
