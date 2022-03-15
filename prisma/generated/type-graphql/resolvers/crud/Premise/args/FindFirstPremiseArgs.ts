import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseOrderByWithRelationInput } from "../../../inputs/PremiseOrderByWithRelationInput";
import { PremiseWhereInput } from "../../../inputs/PremiseWhereInput";
import { PremiseWhereUniqueInput } from "../../../inputs/PremiseWhereUniqueInput";
import { PremiseScalarFieldEnum } from "../../../../enums/PremiseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPremiseArgs {
  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  where?: PremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PremiseOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PremiseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  cursor?: PremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PremiseScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "createdAt" | "updatedAt" | "status" | "authorId"> | undefined;
}
