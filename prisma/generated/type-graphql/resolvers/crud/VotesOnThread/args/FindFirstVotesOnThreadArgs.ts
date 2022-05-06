import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadOrderByWithRelationInput } from "../../../inputs/VotesOnThreadOrderByWithRelationInput";
import { VotesOnThreadWhereInput } from "../../../inputs/VotesOnThreadWhereInput";
import { VotesOnThreadWhereUniqueInput } from "../../../inputs/VotesOnThreadWhereUniqueInput";
import { VotesOnThreadScalarFieldEnum } from "../../../../enums/VotesOnThreadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereInput, {
    nullable: true
  })
  where?: VotesOnThreadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VotesOnThreadOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: true
  })
  cursor?: VotesOnThreadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "threadId" | "vote" | "createdAt" | "updatedAt"> | undefined;
}
