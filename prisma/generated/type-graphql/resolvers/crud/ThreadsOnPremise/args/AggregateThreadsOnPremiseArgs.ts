import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseOrderByWithRelationInput } from "../../../inputs/ThreadsOnPremiseOrderByWithRelationInput";
import { ThreadsOnPremiseWhereInput } from "../../../inputs/ThreadsOnPremiseWhereInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../../../inputs/ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
    nullable: true
  })
  where?: ThreadsOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ThreadsOnPremiseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
    nullable: true
  })
  cursor?: ThreadsOnPremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
