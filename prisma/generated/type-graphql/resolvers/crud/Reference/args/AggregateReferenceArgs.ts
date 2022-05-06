import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReferenceOrderByWithRelationInput } from "../../../inputs/ReferenceOrderByWithRelationInput";
import { ReferenceWhereInput } from "../../../inputs/ReferenceWhereInput";
import { ReferenceWhereUniqueInput } from "../../../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReferenceArgs {
  @TypeGraphQL.Field(_type => ReferenceWhereInput, {
    nullable: true
  })
  where?: ReferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReferenceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReferenceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReferenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
