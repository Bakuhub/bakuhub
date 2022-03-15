import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseUpdateManyMutationInput } from "../../../inputs/PremiseUpdateManyMutationInput";
import { PremiseWhereInput } from "../../../inputs/PremiseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPremiseArgs {
  @TypeGraphQL.Field(_type => PremiseUpdateManyMutationInput, {
    nullable: false
  })
  data!: PremiseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  where?: PremiseWhereInput | undefined;
}
