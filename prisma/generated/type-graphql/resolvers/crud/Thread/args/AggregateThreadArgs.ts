import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadOrderByWithRelationInput } from "../../../inputs/ThreadOrderByWithRelationInput";
import { ThreadWhereInput } from "../../../inputs/ThreadWhereInput";
import { ThreadWhereUniqueInput } from "../../../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateThreadArgs {
  @TypeGraphQL.Field(_type => ThreadWhereInput, {
    nullable: true
  })
  where?: ThreadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ThreadOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThreadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
