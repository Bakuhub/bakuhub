import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseCreateInput } from "../../../inputs/PremiseCreateInput";
import { PremiseUpdateInput } from "../../../inputs/PremiseUpdateInput";
import { PremiseWhereUniqueInput } from "../../../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPremiseArgs {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremiseCreateInput, {
    nullable: false
  })
  create!: PremiseCreateInput;

  @TypeGraphQL.Field(_type => PremiseUpdateInput, {
    nullable: false
  })
  update!: PremiseUpdateInput;
}
