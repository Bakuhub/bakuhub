import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseOrderByWithRelationInput } from "../../../inputs/VotesOnPremiseOrderByWithRelationInput";
import { VotesOnPremiseWhereInput } from "../../../inputs/VotesOnPremiseWhereInput";
import { VotesOnPremiseWhereUniqueInput } from "../../../inputs/VotesOnPremiseWhereUniqueInput";
import { VotesOnPremiseScalarFieldEnum } from "../../../../enums/VotesOnPremiseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereInput, {
    nullable: true
  })
  where?: VotesOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VotesOnPremiseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput, {
    nullable: true
  })
  cursor?: VotesOnPremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "premiseId" | "vote" | "createdAt" | "updatedAt"> | undefined;
}
