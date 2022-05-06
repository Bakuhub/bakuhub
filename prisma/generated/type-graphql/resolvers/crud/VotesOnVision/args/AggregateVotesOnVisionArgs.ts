import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionOrderByWithRelationInput } from "../../../inputs/VotesOnVisionOrderByWithRelationInput";
import { VotesOnVisionWhereInput } from "../../../inputs/VotesOnVisionWhereInput";
import { VotesOnVisionWhereUniqueInput } from "../../../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereInput, {
    nullable: true
  })
  where?: VotesOnVisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VotesOnVisionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput, {
    nullable: true
  })
  cursor?: VotesOnVisionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
