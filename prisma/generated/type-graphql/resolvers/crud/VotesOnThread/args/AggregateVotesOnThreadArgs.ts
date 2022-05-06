import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadOrderByWithRelationInput } from "../../../inputs/VotesOnThreadOrderByWithRelationInput";
import { VotesOnThreadWhereInput } from "../../../inputs/VotesOnThreadWhereInput";
import { VotesOnThreadWhereUniqueInput } from "../../../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVotesOnThreadArgs {
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
}
