import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnThreadsOrderByWithRelationInput } from "../../../inputs/ReactionOnThreadsOrderByWithRelationInput";
import { ReactionOnThreadsWhereInput } from "../../../inputs/ReactionOnThreadsWhereInput";
import { ReactionOnThreadsWhereUniqueInput } from "../../../inputs/ReactionOnThreadsWhereUniqueInput";
import { ReactionOnThreadsScalarFieldEnum } from "../../../../enums/ReactionOnThreadsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstReactionOnThreadsArgs {
  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput, {
    nullable: true
  })
  where?: ReactionOnThreadsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReactionOnThreadsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReactionOnThreadsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "threadId" | "reaction" | "createdAt"> | undefined;
}
