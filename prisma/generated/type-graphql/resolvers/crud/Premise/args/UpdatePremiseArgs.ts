import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseUpdateInput } from "../../../inputs/PremiseUpdateInput";
import { PremiseWhereUniqueInput } from "../../../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePremiseArgs {
  @TypeGraphQL.Field(_type => PremiseUpdateInput, {
    nullable: false
  })
  data!: PremiseUpdateInput;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;
}
