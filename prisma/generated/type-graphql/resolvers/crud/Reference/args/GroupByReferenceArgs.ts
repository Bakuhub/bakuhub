import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceOrderByWithAggregationInput } from "../../../inputs/ReferenceOrderByWithAggregationInput";
import { ReferenceScalarWhereWithAggregatesInput } from "../../../inputs/ReferenceScalarWhereWithAggregatesInput";
import { ReferenceWhereInput } from "../../../inputs/ReferenceWhereInput";
import { ReferenceScalarFieldEnum } from "../../../../enums/ReferenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReferenceArgs {
  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  where?: ReferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReferenceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReferenceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceScalarFieldEnum], {
    nullable: false
  })
  by!: "id"[];

  @TypeGraphQL.Field(_type => ReferenceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReferenceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
